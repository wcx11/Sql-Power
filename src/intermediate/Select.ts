import { Query } from "./Query";
import { BaseExpression } from "./Expression";
import { VariableStack, META_COLUMNINFO, METAKEY_COLUMNNAME, METAKEY_TABLENAME, METAKEY_ORIG_COLUMNNAME } from "../m/Variable";
import * as M from "../m/M";
import * as Utils from "../m/Utils";
import * as Functions from "../m/Functions";

export class Select {
    query: Query;
    orders: Order[];
    top: number;

    public generateM(): M.Expression {
        let variableStack: VariableStack = new VariableStack();
        const letExpression = new M.LetExpression();
        variableStack.newScope();
        letExpression.let.push(Utils.customCheckColumnName);
        letExpression.let.push(Utils.customGetTableName);
        letExpression.let.push(Utils.customCompareList);

        let tableSource_M: M.ExpressionOrConst = null;
        let paraTableSourceName: string;
        if (this.query.from && this.query.from.length > 0) {
            const paraTableList = this.query.from.map(table => table.getVariableName(variableStack));
            const table_M_List = this.query.from.map(table => table.generateM(variableStack));
            paraTableList.forEach((paraTableSource, i) => letExpression.let.push(new M.AssignExpression(paraTableSource, table_M_List[i])));
            tableSource_M = Utils.combineTables(paraTableList, variableStack);
            paraTableSourceName = this.query.from.length === 1 ? this.query.from[0].getVariableName(variableStack) : variableStack.getName('combinedSource');
            letExpression.let.push(new M.AssignExpression(paraTableSourceName, tableSource_M));
        }

        let parafilteredName: string;
        if (this.query.where) {
            const filteredTable_M = new M.AddMetaExpression(
                Functions.Table_SelectRows(paraTableSourceName, new M.EachExpression(this.query.where.generateM(
                    variableStack,
                    {'TABLE': '_', 'META': new M.FieldAccessExpression(Functions.Value_Metadata(paraTableSourceName), META_COLUMNINFO)}
                ))),
                Functions.Value_Metadata(paraTableSourceName)
            );
            parafilteredName = variableStack.getName('filteredSource');
            letExpression.let.push(new M.AssignExpression(parafilteredName, filteredTable_M));
        }

        const paraTable: string = parafilteredName || paraTableSourceName;
        const currentGlobal = {'TABLE': paraTable, 'META': new M.FieldAccessExpression(Functions.Value_Metadata(paraTable), META_COLUMNINFO)}
        let select_having_order = [];
        
        const queryResult = this.query.generateMForSelect(variableStack, currentGlobal, this.orders);
        select_having_order = [...queryResult.result];

        let groupEqual = new M.FunctionDefinationExpression(["x", "y"], 1);
        if (this.query.group && this.query.group.length > 0) {
            groupEqual = new M.FunctionDefinationExpression(
                ["x", "y"],
                Functions.Custom_CompareList(
                    new M.List(this.query.group.map(g => g.generateM(variableStack, {'TABLE': 'x', 'META': new M.FieldAccessExpression(Functions.Value_Metadata(paraTable), META_COLUMNINFO)}))),
                    new M.List(this.query.group.map(g => g.generateM(variableStack, {'TABLE': 'y', 'META': new M.FieldAccessExpression(Functions.Value_Metadata(paraTable), META_COLUMNINFO)}))),
                )
            );
        }

        const groupResult_M = Functions.Table_Group(
            paraTable,
            Functions.Table_ColumnNames(paraTable),
            select_having_order,
            groupEqual
        );

        const paraGroup = variableStack.getName('groupResult');
        letExpression.let.push(new M.AssignExpression(paraGroup, groupResult_M));
        
        let paraCurrent = paraGroup;
        if (this.query.having) {
            const paraHaving = variableStack.getName('havingResult');
            const havingResult_M = Functions.Table_SelectRows(paraGroup, new M.EachExpression(new M.ComparisionExpression('=', new M.FieldAccessExpression('', queryResult.havingMeta), true)));
            letExpression.let.push(new M.AssignExpression(paraHaving, havingResult_M));
            paraCurrent = paraHaving;
        }

        if (this.orders && this.orders.length > 0) {
            const sortResult_M = Functions.Table_Sort(
                paraCurrent,
                Functions.List_Zip(queryResult.orderMeta, new M.List(this.orders.map(order => order.orderType === OrderTypeEnum.ASC ? "Order.Ascending" : "Order.Descending")))
            );
            const paraSort = variableStack.getName('sortResult');
            letExpression.let.push(new M.AssignExpression(paraSort, sortResult_M));
            paraCurrent = paraSort;
        }

        const selectResult_M = Functions.Table_SelectColumns(
            paraCurrent,
            Functions.List_Transform(
                queryResult.selectMeta,
                new M.EachExpression(Functions.Text_Combine([new M.FieldAccessExpression('', METAKEY_TABLENAME), new M.FieldAccessExpression('', METAKEY_COLUMNNAME)], new M.StringExpression('.')))
            )
        );
        const paraSelect = variableStack.getName('selectResult');
        letExpression.let.push(new M.AssignExpression(paraSelect, selectResult_M));

        const restoreName_M = Functions.Table_RenameColumns(
            paraSelect,
            Functions.Table_ColumnNames(paraSelect),
            Functions.List_Accumulate(
                queryResult.selectMeta,
                new M.List([]),
                new M.FunctionDefinationExpression(["state", "current"], new M.IfExpression(
                    new M.OrExpression(new M.ComparisionExpression('=', 'null', new M.FieldAccessExpression('current', METAKEY_ORIG_COLUMNNAME)), Functions.List_Contains(
                        "state",
                        Functions.Text_Combine([new M.FieldAccessExpression('current', METAKEY_TABLENAME), new M.FieldAccessExpression('current', METAKEY_ORIG_COLUMNNAME)], new M.StringExpression('.'))
                    )),
                    new M.BinaryExpression('&', "state", new M.List([Functions.Text_Combine([new M.FieldAccessExpression('current', METAKEY_TABLENAME), new M.FieldAccessExpression('current', METAKEY_COLUMNNAME)], new M.StringExpression('.'))])),
                    new M.BinaryExpression('&', "state", new M.List([Functions.Text_Combine([new M.FieldAccessExpression('current', METAKEY_TABLENAME), new M.FieldAccessExpression('current', METAKEY_ORIG_COLUMNNAME)], new M.StringExpression('.'))]))
                ))
            )
        );
        const paraRestoreName = variableStack.getName('restoreNameResult');
        letExpression.let.push(new M.AssignExpression(paraRestoreName, restoreName_M));
        
        paraCurrent = paraRestoreName;

        if (this.query.isDistinct) {
            const distinctResult_M = Functions.Table_Distinct(paraCurrent);
            const paraDistinct = variableStack.getName('distinctResult');
            letExpression.let.push(new M.AssignExpression(paraDistinct, distinctResult_M));
            paraCurrent = paraDistinct;
        }
        
        const addMeta_M = new M.AddMetaExpression(
            paraCurrent,
            new M.Record([[META_COLUMNINFO, 
            Functions.List_Accumulate(
                queryResult.selectMeta,
                new M.List([]),
                new M.FunctionDefinationExpression(["state", "current"], new M.IfExpression(
                    new M.OrExpression(new M.ComparisionExpression('=', 'null', new M.FieldAccessExpression('current', METAKEY_ORIG_COLUMNNAME)), Functions.List_Contains(
                        "state",
                        Functions.Text_Combine([new M.FieldAccessExpression('current', METAKEY_TABLENAME), new M.FieldAccessExpression('current', METAKEY_ORIG_COLUMNNAME)], new M.StringExpression('.'))
                    )),
                    new M.BinaryExpression('&', "state", new M.List([
                        new M.Record(
                            [
                                [METAKEY_TABLENAME, new M.FieldAccessExpression('current', METAKEY_TABLENAME)],
                                [METAKEY_COLUMNNAME, new M.FieldAccessExpression('current', METAKEY_COLUMNNAME)]
                            ]
                        )
                    ])),
                    new M.BinaryExpression('&', "state", new M.List([
                        new M.Record(
                            [
                                [METAKEY_TABLENAME, new M.FieldAccessExpression('current', METAKEY_TABLENAME)],
                                [METAKEY_COLUMNNAME, new M.FieldAccessExpression('current', METAKEY_ORIG_COLUMNNAME)]
                            ]
                        )
                    ]))
                ))
            )]]
        ));
        const paraAddMeta = variableStack.getName('addMeta');
        letExpression.let.push(new M.AssignExpression(paraAddMeta, addMeta_M));
        letExpression.in = paraAddMeta;
        variableStack.endScope();
        return letExpression;
    }
}

export class Order {
    expression: BaseExpression;
    orderType: OrderTypeEnum;

    constructor() {
        this.orderType = OrderTypeEnum.ASC;
    }
}

export enum OrderTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}