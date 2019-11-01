import { Table } from "./Table";
import { BaseExpression } from "./Expression";

export class Select {
    public selectList: SelectElement[];
}

export class SelectElement {
    constructor(_selectType) {
        this.selectType = _selectType;
    }
    selectType: SelectTypeEnum;
    relatedTable: Table;
    columnName?: string;
    columnAlias?: string;
    expression?: BaseExpression;
}

export enum SelectTypeEnum {
    ALL='ALL',
    COLUMN='COLUMN',
    EXPRESSION='EXPRESSION',
    UDT='UDT'
}