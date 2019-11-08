import { Query } from "./Query";
import { SearchCondition } from "./condition";

export abstract class TableSource {
    alias?: string;
}

export class Table extends TableSource {
    name: string;
    alias?: string;

    constructor(_name: string) {
        super();
        this.name = _name;
    }
}

export class DerivedTable extends TableSource {
    subQuery: Query;
}

export class Rowset extends TableSource {

}

export class JoinedTable extends TableSource {
    tableSource: TableSource;
    joinPart: JoinPart[];
    alias?: string;
}

export class JoinPart {
    tableSource?: TableSource;
    joinType: JoinTypeEnum;
    joinCondition?: SearchCondition;
}

export enum JoinTypeEnum {
    INNER = 'INNER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    FULL = 'FULL',
    CROSS = 'CROSS',
    CROSS_APPLY = 'CROSS_APPLY',
    OUTER_APPLY = 'OUTER_APPLY',
    PIVOT = 'PIVOT',
    UNPIVOT = 'UNPIVOT'
}

export class Column {
    columnName: string;
    tableNameOrAlias?: string;
    constructor(_columnName, _tableNameOrAlias?) {
        this.columnName = _columnName;
        this.tableNameOrAlias = _tableNameOrAlias;
    }
}