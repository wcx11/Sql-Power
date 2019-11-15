import * as Functions from './Functions';
import * as M from './M';


export function importSourceFromExcel(tableName: string): M.Expression {
    const currentBook = new M.FunctionExpression(`Excel.CurrentWorkBook`, tableName);
    const table = new M.FieldAccessExpression(
        new M.ItemAccessExpression(currentBook, new M.Record(['Name', new M.StringExpression(tableName)])),
        'Content'
    );
    const tableWithMeta = new M.AddMetaExpression(table, new M.Record(['columnInfo', null]))
    tableWithMeta.valueType = M.ValueTypeEnum.TABLE;
    return table;
}