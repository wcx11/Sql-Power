import { TableSource, Table } from './Table';
import { BaseExpression } from './Expression';
import { SearchConditionExpression } from './Condition';

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

export class Query {
    public selectList: SelectElement[];
    public isDistinct: boolean;
    public from?: TableSource[];
    where: SearchConditionExpression;
    having: SearchConditionExpression;
    group: BaseExpression[];
}