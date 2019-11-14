import * as M from './M';


export function importSourceFromExcel(tableName: string): M.FunctionExpression {
    return new M.FunctionExpression(`Excel.CurrentWorkBook`, tableName);
}

export function selectRowsFromTable() {
    
}

export function selectColumnsFromTable() {

}

export function joinTable(): M.FunctionExpression {
    return new M.FunctionExpression(``);
}