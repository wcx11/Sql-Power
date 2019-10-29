import { Table } from "./Table";

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
    expression?: string;
}

export enum SelectTypeEnum {
    ALL,
    COLUMN,
    EXPRESSION,
    UDT
}