import * as Functions from './Functions';
import * as M from './M';
import { JoinTypeEnum } from '../intermediate/Table';
import { SearchConditionExpression, ComparisonExpression } from '../intermediate/Condition';
import { VariableStack, GlobalKeyEnum, METAKEY_TABLENAME, METAKEY_COLUMNNAME, META_COLUMNINFO } from './Variable';

export function importSourceFromExcel(tableName: string, variableStack: VariableStack): M.Expression {
    const currentBook = Functions.Excel_CurrentWorkbook();
    const table = new M.FieldAccessExpression(
        new M.ItemAccessExpression(currentBook, new M.Record([['Name', new M.StringExpression(tableName)]])),
        'Content'
    );
    return addMetaToTable(table, tableName, false, variableStack);
}

export function addMetaToTable(table: M.Expression, tableName: string, hasMeta: boolean, variableStack: VariableStack) {
    const paraColumn = variableStack.getName('column');
    const paraName = variableStack.getName('name');
    const columnNames = hasMeta ?
        Functions.List_Transform(
            new M.FieldAccessExpression(Functions.Value_Metadata(table), META_COLUMNINFO),
            new M.FunctionDefinationExpression(
                [paraColumn],
                new M.FieldAccessExpression(new M.VariableExpression(paraColumn), METAKEY_COLUMNNAME)
            )
        ) : Functions.Table_ColumnNames(table);

    const fullColumnNames = Functions.List_Transform(
        columnNames,
        new M.FunctionDefinationExpression(
            [paraName],
            Functions.Text_Combine([new M.StringExpression(tableName), paraName], new M.StringExpression('.'))            
        )
    );

    const metadata = new M.Record([[META_COLUMNINFO, Functions.List_Transform(
        columnNames,
        new M.FunctionDefinationExpression(
            [paraName],
            new M.Record([[METAKEY_TABLENAME, new M.StringExpression(tableName)], [METAKEY_COLUMNNAME, paraName]])            
        )
    )]]);

    const tableWithMeta = new M.AddMetaExpression(Functions.Table_RenameColumns(table, columnNames, fullColumnNames), metadata);
    tableWithMeta.valueType = M.ValueTypeEnum.TABLE;
    return tableWithMeta;
}

export function joinTwoTable(left: M.Expression, right: M.Expression, joinType: JoinTypeEnum, joinCondition: SearchConditionExpression, variableStack: VariableStack, globalInfo): M.Expression {
    /*if (joinCondition instanceof ComparisonExpression && joinCondition.op === '=') {
        return Functions.Table_Join(left, {}, right, {}, joinType);
    }*/

    const leftList_M: M.Expression = Functions.Table_ToRecords(left);
    const rightList_M: M.Expression = Functions.Table_ToRecords(right);
    const leftMeta_M: M.Expression = new M.FieldAccessExpression(Functions.Value_Metadata(left), META_COLUMNINFO);
    const rightMeta_M: M.Expression = new M.FieldAccessExpression(Functions.Value_Metadata(right), META_COLUMNINFO);
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
                new M.BinaryExpression(
                    '&',
                    paraAcc,
                    Functions.List_Accumulate(
                        rightList_M,
                        new M.List([]),
                        new M.FunctionDefinationExpression(
                            [paraInnerAcc, paraRightRow],
                            joinCondition ?
                            new M.IfExpression(
                                joinCondition.generateM(variableStack, {'TABLE': new M.BinaryExpression('&', paraLeftRow, paraRightRow), 'META': new M.BinaryExpression('&', leftMeta_M, rightMeta_M)}),
                                new M.BinaryExpression('&', paraInnerAcc, new M.List([new M.BinaryExpression('&', paraLeftRow, paraRightRow)])),
                                paraInnerAcc
                            ) :
                            new M.BinaryExpression('&', paraInnerAcc, new M.List([new M.BinaryExpression('&', paraLeftRow, paraRightRow)]))
                        )
                    )
                )
            )
        )
    }

    return new M.AddMetaExpression(Functions.Table_FromRecords(joined), new M.Record([[META_COLUMNINFO, new M.BinaryExpression('&', leftMeta_M, rightMeta_M)]]));
}

// when there are multiple tables in from clause: select * from table1, table2, table3, ...
// the actual table source is the inner joined result of the tables without condition
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

export const customGetTableName = new M.AssignExpression('Custom.GetTableName', new M.FunctionDefinationExpression(
    ['columnName', 'metaList'],
    new M.FieldAccessExpression(
        new M.IndexAccessExpression(
            Functions.List_Select(
                'metaList',
                new M.EachExpression(new M.ComparisionExpression('=',new M.FieldAccessExpression(null, METAKEY_COLUMNNAME), 'columnName'))
            ),
        0
    ), METAKEY_TABLENAME)
));

export const customCheckColumnName = new M.AssignExpression('Custom.CheckColumnName', new M.FunctionDefinationExpression(
    ['tableName', 'suggestName', 'reservedNames', 'step'],
    new M.IfExpression(
        Functions.List_Contains(
            'reservedNames',
            new M.IfExpression(
                new M.ComparisionExpression('=', 'step', 0),
                Functions.Text_Combine(['tableName', 'suggestName'], new M.StringExpression('.')),
                new M.BinaryExpression('&', Functions.Text_Combine(['tableName', 'suggestName'], new M.StringExpression('.')), Functions.Number_ToText('step'))
            )
        ),
        new M.InvokeFunctionExpression('@Custom.CheckColumnName', 'tableName', 'suggestName', 'reservedNames', new M.BinaryExpression('+', 'step', 1)),
        new M.IfExpression(
            new M.ComparisionExpression('=', 'step', 0),
            'suggestName',
            new M.BinaryExpression('&', 'suggestName', Functions.Number_ToText('step'))
        )
    )
));