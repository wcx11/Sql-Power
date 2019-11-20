import { SearchConditionExpression } from "./Condition";
import { Select } from "./Select";
import * as M from "../m/M";
import { VariableStack } from "../m/Variable";
import * as Functions from "../m/Functions";
import * as Utils from '../m/Utils';

export abstract class TableSource {
    alias?: string;
    public abstract generateM(variableStack: VariableStack): M.Expression;
    public abstract getVariableName(variableStack: VariableStack): string;
}

export class Table extends TableSource {
    name: string;
    alias?: string;

    constructor(_name: string) {
        super();
        this.name = _name;
    }

    public generateM(variableStack: VariableStack): M.Expression {
        return Utils.importSourceFromExcel(this.name, variableStack);
    }

    public getVariableName(variableStack: VariableStack): string {
        return variableStack.getName(this.alias || this.name);
    }
}

export class DerivedTable extends TableSource {
    subQuery: Select;
    alias: string;

    public generateM(variableStack: VariableStack): M.Expression {
        const l = new M.LetExpression();
        const paraQuery = variableStack.getName('source');
        l.let.push(new M.AssignExpression(paraQuery, this.subQuery.generateM()));
        const paraAfterMeta = variableStack.getName('sourceWithMeta');
        l.let.push(new M.AssignExpression(paraAfterMeta, Utils.addMetaToTable(paraQuery, this.alias, true, variableStack)))
        l.in = paraAfterMeta
        return l;
    }

    public getVariableName(variableStack: VariableStack) {
        return variableStack.getName(this.alias || 'subQuery');
    }
}

/*export class Rowset extends TableSource {
    public generateM(variableStack: VariableStack): M.AssignExpression {
        return null;
    }
}*/

export class JoinedTable extends TableSource {
    tableSource: TableSource;
    joinPart: JoinPart[];

    public generateM(variableStack: VariableStack): M.Expression {
        let joined_M : M.Expression = this.tableSource.generateM(variableStack);
        this.joinPart.forEach(join => {
            if (join.tableSource) {
                joined_M = Utils.joinTwoTable(joined_M, join.tableSource.generateM(variableStack), join.joinType, join.joinCondition, variableStack, {});
            } else {
                throw new Error ('pivot and unpivot will be supported in the future');
            }
        });

        return joined_M;
    }

    public getVariableName(variableStack: VariableStack) {
        return variableStack.getName('joinedTable');
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