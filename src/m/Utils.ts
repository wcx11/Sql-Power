import * as Functions from './Functions';
import * as M from './M';
import { JoinTypeEnum } from '../intermediate/Table';
import { SearchConditionExpression, ComparisonExpression } from '../intermediate/Condition';
import { VariableStack, GlobalKeyEnum } from './Variable';

export function importSourceFromExcel(tableName: string, variableStack: VariableStack): M.Expression {
    const currentBook = Functions.Excel_CurrentWorkbook();
    const table = new M.FieldAccessExpression(
        new M.ItemAccessExpression(currentBook, new M.Record([['Name', new M.StringExpression(tableName)]])),
        'Content'
    );
    return addMetaToTable(table, tableName, false, variableStack);
}

export function addMetaToTable(table: M.Expression, tableName: string, hasMeta: boolean, variableStack: VariableStack) {
    const columnNames = hasMeta ?
        Functions.List_Transform(
            new M.FieldAccessExpression(Functions.Value_Metadata(table), 'columnInfo'),
            new M.FunctionDefinationExpression(
                ['column'],
                new M.FieldAccessExpression(new M.VariableExpression('column'), 'columnNames')
            )
        ) : Functions.Table_ColumnNames(table);

    const fullColumnNames = Functions.List_Transform(
        columnNames,
        new M.FunctionDefinationExpression(
            ['name'],
            Functions.Text_Combine([new M.StringExpression(tableName), 'name'], ',')            
        )
    );

    const metadata = new M.Record([['columnInfo', Functions.List_Transform(
        columnNames,
        new M.FunctionDefinationExpression(
            ['name'],
            new M.Record([['tableName', new M.StringExpression(tableName)], ['columnNames', 'name']])            
        )
    )]]);

    const tableWithMeta = new M.AddMetaExpression(Functions.Table_RenameColumnNames(table, columnNames, fullColumnNames), metadata);
    tableWithMeta.valueType = M.ValueTypeEnum.TABLE;
    return tableWithMeta;
}

export function joinTwoTable(left: M.Expression, right: M.Expression, joinType: JoinTypeEnum, joinCondition: SearchConditionExpression, variableStack: VariableStack, globalInfo): M.Expression {
    /*if (joinCondition instanceof ComparisonExpression && joinCondition.op === '=') {
        return Functions.Table_Join(left, {}, right, {}, joinType);
    }*/

    const leftList_M: M.Expression = Functions.Table_ToRecords(left);
    const rightList_M: M.Expression = Functions.Table_ToRecords(right);
    const leftMeta_M: M.Expression = new M.FieldAccessExpression(Functions.Value_Metadata(left), 'columnInfo');
    const rightMeta_M: M.Expression = new M.FieldAccessExpression(Functions.Value_Metadata(right), 'columnInfo');
    let joined: M.Expression;
    const paraAcc = variableStack.getName('acc');
    const paraLeftRow = variableStack.getName('leftRow');
    const paraInnerAcc = variableStack.getName('rightAcc');
    const paraRightRow = variableStack.getName('rightRow');
    if (joinType === JoinTypeEnum.INNER || joinType === JoinTypeEnum.LEFT || joinType === JoinTypeEnum.RIGHT || joinType === JoinTypeEnum.FULL) {
        joined = Functions.List_Accumulate(
            leftList_M,
            new M.List([]),
            new M.FunctionDefinationExpression(
                [paraAcc, paraLeftRow],
                Functions.Number_BitwiseAnd(
                    paraAcc,
                    Functions.List_Accumulate(
                        rightList_M,
                        new M.List([]),
                        new M.FunctionDefinationExpression(
                            [paraInnerAcc, paraRightRow],
                            new M.IfExpression(
                                joinCondition.generateM(variableStack, {'TABLE': Functions.Number_BitwiseAnd(paraLeftRow, paraRightRow), 'META': Functions.Number_BitwiseAnd(leftMeta_M, rightMeta_M)}),
                                Functions.Number_BitwiseAnd(paraInnerAcc, Functions.Number_BitwiseAnd(paraLeftRow, paraRightRow)),
                                paraInnerAcc
                            )
                        )
                    )
                )
            )
        )
    }

    return new M.AddMetaExpression(Functions.Table_FromRecords(joined), new M.Record([['columnInfo', Functions.Number_BitwiseAnd(leftMeta_M, rightMeta_M)]]));
}

export function combineTables(tables: M.Expression[], variableStack: VariableStack) {
    if (!tables || tables.length === 0) {
        return null;
    }

    if (tables.length === 1) {
        return tables[0];
    } else {
        const [first, second, ...remain] = tables;
        return combineTables([joinTwoTable(first, second, JoinTypeEnum.INNER, null, variableStack, {}), ...remain], variableStack);
    }
}