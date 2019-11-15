import * as M from './M';

/*export class ImportSourceFromExcel extends M.FunctionExpression {
    tableName: string;
    constructor(_tableName) {
        super(`Excel.CurrentWorkBook`, _tableName);
        this.tableName = _tableName;
    }
}*/

export function Excel_CurrentWorkbook(): M.FunctionExpression {
    return new M.FunctionExpression('Excel.CurrentWorkbook');
}

export function Value_Metadata(value: M.Expression): M.FunctionExpression {
    return new M.FunctionExpression('Value.Metadata', value);
}

export function selectRowsFromTable() {
    
}

export function selectColumnsFromTable() {

}