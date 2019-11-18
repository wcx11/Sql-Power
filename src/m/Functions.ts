import * as M from './M';
import { JoinTypeEnum } from '../intermediate/Table';

/*export class ImportSourceFromExcel extends M.FunctionExpression {
    tableName: string;
    constructor(_tableName) {
        super(`Excel.CurrentWorkBook`, _tableName);
        this.tableName = _tableName;
    }
}*/

export function Excel_CurrentWorkbook(): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Excel.CurrentWorkbook');
}

export function Value_Metadata(value: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Value.Metadata', value);
}

export function Table_Column(table: M.ExpressionOrConst, column: M.ExpressionOrConst) {
    return new M.InvokeFunctionExpression('Table.Column', table, column);
}

export function Table_ColumnNames(table: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Table.ColumnNames', table);
}

export function Table_Distinct(table): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Table.Distinct', table);
}

export function Table_FromRecords(records: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Table.FromRecords', records);
}

export function Table_Group(table: M.ExpressionOrConst, keys: M.ExpressionOrConst, aggregatedColumns: any[]) {
    return new M.InvokeFunctionExpression('Table.Group', table, keys,new M.List(aggregatedColumns));
}

export function Table_RenameColumns(table: M.Expression, oldNames: M.ExpressionOrConst, newNames: M.ExpressionOrConst) {
    const renames = List_Zip(oldNames, newNames);
    return new M.InvokeFunctionExpression('Table.RenameColumns', table, renames);
}

export enum MJoinKindEnum {
    INNER = 'JoinKind.Inner',
    LEFT = 'JoinKind.LeftOuter',
    RIGHT = 'JoinKind.RightOuter',
    FULL = 'JoinKind.FullOuter'
}

export function Table_Join(table1: M.Expression, column1: M.ExpressionOrConst, table2: M.Expression, column2: M.ExpressionOrConst, joinType: JoinTypeEnum) {
    let joinKind: MJoinKindEnum;
    switch (joinType) {
        case JoinTypeEnum.LEFT:
            joinKind = MJoinKindEnum.LEFT;
            break;
        case JoinTypeEnum.RIGHT:
            joinKind = MJoinKindEnum.RIGHT;
            break;
        case JoinTypeEnum.FULL:
            joinKind = MJoinKindEnum.FULL;
            break;
        default:
            joinKind = MJoinKindEnum.INNER
            break;
    }
    return new M.InvokeFunctionExpression('Table.Join', table1, column1, table2, column2, joinKind.toString());
}

export function Table_ToRecords(table: M.Expression) {
    return new M.InvokeFunctionExpression('Table.ToRecords', table);
}

export function Table_SelectRows(table: M.ExpressionOrConst, condition: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Table.SelectRows', table, condition);
}

export function List_Accumulate(list: M.ExpressionOrConst, seed: M.ExpressionOrConst, accumulator: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Accumulate', list, seed, accumulator);
}

export function List_AllTrue(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.AllTrue', list);
}

export function List_AnyTrue(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.AnyTrue', list);
}

export function List_Average(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Average', list);
}

export function List_Combine(lists: M.ExpressionOrConst[]): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Combine', new M.List(lists));
}

export function List_Count(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Count', list);
}

export function List_Contains(list: M.ExpressionOrConst, value: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Contains', list, value);
}

export function List_Distinct(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Distinct', list);
}

export function List_Generate(initial, condition, next, selector?): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Generate', initial, condition, next, selector);
}

export function List_InsertRangeAtLast(list: M.ExpressionOrConst, values: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.InsertRange', list, List_Count(list), values);
}

export function List_InsertRange(list: M.ExpressionOrConst, index: M.ExpressionOrConst, values: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.InsertRange', list, index, values);
}

export function List_Max(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Max', list);
}

export function List_Min(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Min', list);
}

export function List_StandardDeviation(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.StandardDeviation', list);
}

export function List_Sum(list: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Sum', list);
}

export function List_Select(list: M.ExpressionOrConst, selection: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Select', list, selection);
}

export function List_Transform(list: M.ExpressionOrConst, transform: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Transform', list, transform);
}

export function List_Zip(...lists: M.ExpressionOrConst[]): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('List.Zip', new M.List(lists));
}

export function Record_Field(record: M.ExpressionOrConst, field: M.ExpressionOrConst) {
    return new M.InvokeFunctionExpression('Record.Field', record, field);
}

export function Text_Combine(lists: M.ExpressionOrConst[], separator: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Text.Combine', new M.List(lists), separator);
}

export function Number_BitwiseAnd(number1: M.ExpressionOrConst, number2: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Number.BitwiseAnd', number1, number2);
}

export function Number_BitwiseNot(number: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Number.BitwiseNot', number);
}

export function Number_BitwiseOr(number1: M.ExpressionOrConst, number2: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Number.BitwiseOr', number1, number2);
}

export function Number_BitwiseXor(number1: M.ExpressionOrConst, number2: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Number.BitwiseXor', number1, number2);
}

export function Number_Mod(number: M.ExpressionOrConst, divisor: M.ExpressionOrConst): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Number.Mod', number, divisor);
}

export function Number_ToText(number: M.ExpressionOrConst) {
    return new M.InvokeFunctionExpression('Number.ToText', number);
}

export function Record_Combine(recoreds: M.ExpressionOrConst[]): M.InvokeFunctionExpression {
    return new M.InvokeFunctionExpression('Record.Combine', new M.List(recoreds));
}

export function Custom_CheckColumnName(tableName: M.ExpressionOrConst, suggestName: M.ExpressionOrConst, reservedNames: M.ExpressionOrConst, step: M.ExpressionOrConst) {
    return new M.InvokeFunctionExpression('Custom.CheckColumnName', tableName, suggestName, reservedNames, step);
}

export function Custom_GetTableName(columnName: M.ExpressionOrConst, metaList: M.ExpressionOrConst) {
    return new M.InvokeFunctionExpression('Custom.GetTableName', columnName, metaList);
}