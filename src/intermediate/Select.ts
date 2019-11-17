import { Query } from "./Query";
import { BaseExpression } from "./Expression";
import { VariableStack, META_COLUMNINFO, METAKEY_COLUMNNAME, METAKEY_TABLENAME } from "../m/Variable";
import * as M from "../m/M";
import * as Utils from "../m/Utils";
import * as Functions from "../m/Functions";

export class Select {
    query: Query;
    order: Order;
    top: number;

    public generateM(): M.Expression {
        let variableStack: VariableStack = new VariableStack();
        const letExpression = new M.LetExpression();
        variableStack.newScope();
        letExpression.let.push(Utils.customCheckColumnName);
        letExpression.let.push(Utils.customGetTableName);

        let tableSource_M: M.ExpressionOrConst = null;
        let paraTableSourceName: string;
        if (this.query.from && this.query.from.length > 0) {
            const table_M_List = this.query.from.map(table => table.generateM(variableStack));
            tableSource_M = Utils.combineTables(table_M_List, variableStack);
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
        
        select_having_order = [...this.query.generateMForSelect(variableStack, currentGlobal)];

        const selectResult_M = Functions.Table_Group(
            paraTable,
            Functions.Table_ColumnNames(paraTable),
            select_having_order
        )

        const paraSelect = variableStack.getName('selectResult');
        letExpression.let.push(new M.AssignExpression(paraSelect, selectResult_M));

        letExpression.in = this.query.isDistinct ? Functions.Table_Distinct(paraSelect) : paraSelect;
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