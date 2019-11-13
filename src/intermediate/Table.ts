import { SearchConditionExpression } from "./Condition";
import { Select } from "./Select";
import * as M from "../m/M";
import { VariableStack } from "../m/Variable";

export abstract class TableSource {
    alias?: string;
    public abstract generateM(variableStack: VariableStack);
}

export class Table extends TableSource {
    name: string;
    alias?: string;

    constructor(_name: string) {
        super();
        this.name = _name;
    }

    public generateM(variableStack: VariableStack): M.Expression {
        return new M.AssignExpression();
    }
}

export class DerivedTable extends TableSource {
    subQuery: Select;
    alias: string;

    public generateM(variableStack: VariableStack): M.Expression {
        return new M.AssignExpression();
    }
}

export class Rowset extends TableSource {
    public generateM(variableStack: VariableStack): M.Expression {
        return null;
    }
}

export class JoinedTable extends TableSource {
    tableSource: TableSource;
    joinPart?: JoinPart[];

    public generateM(variableStack: VariableStack): M.Expression {
        return new M.AssignExpression();
    }
}

export class JoinPart {
    tableSource?: TableSource;
    joinType: JoinTypeEnum;
    joinCondition?: SearchConditionExpression;
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