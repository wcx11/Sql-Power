import { TableSource, Table } from './Table';
import { BaseExpression, ColumnExpression } from './Expression';
import { SearchConditionExpression } from './Condition';
import { VariableStack, GlobalKeyEnum, METAKEY_TABLENAME, METAKEY_COLUMNNAME, METAKEY_ORIG_COLUMNNAME } from '../m/Variable';
import * as M from '../m/M';
import * as Functions from '../m/Functions';
import { Order } from './Select';

export class SelectElement {
    constructor(_selectType) {
        this.selectType = _selectType;
    }
    selectType: SelectTypeEnum;
    relatedTable?: string;
    column?: ColumnExpression;
    columnAlias?: string;
    expression?: BaseExpression;
}

export enum SelectTypeEnum {
    ALL='ALL',
    COLUMN='COLUMN',
    EXPRESSION='EXPRESSION',
    UDT='UDT'
}

export class Query {
    public selectList: SelectElement[];
    public isDistinct: boolean;
    public from?: TableSource[];
    where: SearchConditionExpression;
    having: SearchConditionExpression;
    group: BaseExpression[];

    public generateMForSelect(variableStack, globalInfo, orders: Order[]) {
        let result = [];
        let selectMeta: any = new M.List([]);
        globalInfo[GlobalKeyEnum.RESERVED_M] = new M.BinaryExpression(
            '&',
            Functions.Table_ColumnNames(globalInfo[GlobalKeyEnum.TABLE]),
            new M.List(this.selectList.filter(select => select.columnAlias).map(select => new M.StringExpression(select.columnAlias)))
        );

        let orderMeta: any = new M.List([]);
        let havingMeta: any = new M.List([]);

        for(let i = 0; i < this.selectList.length; i++) {
            const currentSelect = this.selectList[i];
            switch (currentSelect.selectType) {
                case SelectTypeEnum.ALL:
                    if (currentSelect.relatedTable) {

                    } else {

                    }
                    break;
                case SelectTypeEnum.COLUMN:
                    const tableName_M = currentSelect.column.column.tableNameOrAlias ?
                        new M.StringExpression(currentSelect.column.column.tableNameOrAlias) :
                        Functions.Custom_GetTableName(new M.StringExpression(currentSelect.column.column.columnName), globalInfo[GlobalKeyEnum.META_LIST_M]);
                    const columnName_M = currentSelect.columnAlias ?
                        new M.StringExpression(currentSelect.columnAlias) :
                        Functions.Custom_CheckColumnName(
                            tableName_M,
                            new M.StringExpression(currentSelect.column.column.columnName),
                            globalInfo[GlobalKeyEnum.RESERVED_M],
                            0
                        );
                    
                    globalInfo[GlobalKeyEnum.RESERVED_M] = new M.BinaryExpression('&', globalInfo[GlobalKeyEnum.RESERVED_M], new M.List([Functions.Text_Combine([tableName_M, columnName_M], new M.StringExpression('.'))]));
                    selectMeta = new M.BinaryExpression('&', selectMeta, new M.List([new M.Record([
                        [METAKEY_TABLENAME, tableName_M],
                        [METAKEY_COLUMNNAME, columnName_M],
                        [METAKEY_ORIG_COLUMNNAME, currentSelect.columnAlias ? "null" : new M.StringExpression(currentSelect.column.column.columnName)]
                    ])]));
                    result.push(new M.List([
                        Functions.Text_Combine([tableName_M, columnName_M], new M.StringExpression('.')),
                        new M.EachExpression(currentSelect.column.generateM(variableStack, {'TABLE': '_', 'META': globalInfo[GlobalKeyEnum.META_LIST_M], 'INGROUP': true, 'INAGG': false}))]));
                    break;
                case SelectTypeEnum.EXPRESSION:
                    const expressionName_M = currentSelect.columnAlias ?
                        new M.StringExpression(currentSelect.columnAlias) :
                        Functions.Custom_CheckColumnName(new M.StringExpression(''), new M.StringExpression('expression'), globalInfo[GlobalKeyEnum.RESERVED_M], 0);
                    const fullExpressionName_M = Functions.Text_Combine([new M.StringExpression(''), expressionName_M], new M.StringExpression('.'));
                    globalInfo[GlobalKeyEnum.RESERVED_M] = new M.BinaryExpression('&', globalInfo[GlobalKeyEnum.RESERVED_M], new M.List([fullExpressionName_M]));
                    selectMeta = new M.BinaryExpression('&', selectMeta, new M.List([new M.Record([
                        [METAKEY_TABLENAME, new M.StringExpression('')],
                        [METAKEY_COLUMNNAME, expressionName_M],
                        [METAKEY_ORIG_COLUMNNAME, "null"]
                    ])]))
                    result.push(new M.List([fullExpressionName_M, new M.EachExpression(currentSelect.expression.generateM(variableStack, {'TABLE': '_', 'META': globalInfo[GlobalKeyEnum.META_LIST_M], 'INGROUP': true, 'INAGG': false}))]));
                    break;
                default:
                    throw new Error('UDT select will be supported in the future');
            }
        }

        if (this.having) {
            const havingName_M = Functions.Custom_CheckColumnName(new M.StringExpression(''), new M.StringExpression('having'), globalInfo[GlobalKeyEnum.RESERVED_M], 0);
            globalInfo[GlobalKeyEnum.RESERVED_M] = new M.BinaryExpression('&', globalInfo[GlobalKeyEnum.RESERVED_M], new M.List([Functions.Text_Combine([new M.StringExpression(''), havingName_M], new M.StringExpression('.'))]));
            havingMeta = new M.BinaryExpression('&', new M.StringExpression('.'), Functions.Text_Combine([new M.StringExpression(''), havingName_M], new M.StringExpression('.')));
            result.push(new M.List([Functions.Text_Combine([new M.StringExpression(''), havingName_M], new M.StringExpression('.')), new M.EachExpression(this.having.generateM(variableStack, {'TABLE': '_', 'META': globalInfo[GlobalKeyEnum.META_LIST_M], 'INGROUP': true, 'INAGG': false}))]));
        }

        if (orders && orders.length > 0) {
            for (let i = 0; i < orders.length; i++) {
                const orderName_M = Functions.Custom_CheckColumnName(new M.StringExpression(''), new M.StringExpression('order'), globalInfo[GlobalKeyEnum.RESERVED_M], 0);
                globalInfo[GlobalKeyEnum.RESERVED_M] = new M.BinaryExpression('&', globalInfo[GlobalKeyEnum.RESERVED_M], new M.List([Functions.Text_Combine([new M.StringExpression(''), orderName_M], new M.StringExpression('.'))]));
                orderMeta = new M.BinaryExpression('&', orderMeta, new M.List([new M.BinaryExpression('&', new M.StringExpression('.'), orderName_M)]));
                result.push(new M.List([Functions.Text_Combine([new M.StringExpression(''), orderName_M], new M.StringExpression('.')), new M.EachExpression(orders[i].expression.generateM(variableStack, {'TABLE': '_', 'META': globalInfo[GlobalKeyEnum.META_LIST_M], 'INGROUP': true, 'INAGG': false}))]));
            }
        }

        return {result, selectMeta, havingMeta, orderMeta};
    }
}