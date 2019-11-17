import { Column } from "./Table";
import { Select } from "./Select";
import { VariableStack, GlobalKeyEnum, METAKEY_COLUMNNAME, METAKEY_TABLENAME } from "../m/Variable";
import * as M from '../m/M';
import * as Functions from '../m/Functions';

export abstract class BaseExpression {
    public abstract generateM (variableStack: VariableStack, globalInfo: {[key: string]: any}): M.ExpressionOrConst;
}

export class PrimitiveExpression extends BaseExpression {
    public value: PrimitiveValue;

    public generateM(variableStack: VariableStack, globalInfo: {[key: string]: any}): M.ExpressionOrConst {
        if (typeof(this.value) === 'string') {
            return new M.StringExpression(this.value);
        }
        return this.value;
    }
}

export type UnaryOperator = '-' | '~';

export class UnaryExpression extends BaseExpression {
    op: UnaryOperator;
    public expression: BaseExpression;

    constructor(_op: UnaryOperator, _expression: BaseExpression) {
        super();
        this.op = _op;
        this.expression = _expression;
    }

    public generateM(variableStack: VariableStack, globalInfo: {[key: string]: any}): M.ExpressionOrConst {
        if (this.op === '-') {
            return new M.NegativeExpression(this.expression.generateM(variableStack, globalInfo));
        }
    }
}

export type BinaryOperator = '*' | '/' | '%' | '+' | '-' | '&' | '^' | '|' | '||';

export class BinaryExpression extends BaseExpression {
    public op: BinaryOperator;
    public left: BaseExpression;
    public right: BaseExpression;

    constructor(_op: BinaryOperator, _left: BaseExpression, _right: BaseExpression) {
        super();
        this.op = _op;
        this.left = _left;
        this.right = _right;
    }

    public generateM(variableStack: VariableStack, globalInfo: {[key: string]: any}): M.Expression {
        switch (this.op) {
            case '+':
            case '-':
            case '*':
            case '/':
                return new M.BinaryExpression(this.op as M.BinaryOperator, this.left.generateM(variableStack, globalInfo), this.right.generateM(variableStack, globalInfo));
            case '&':
                return Functions.Number_BitwiseAnd(this.left.generateM(variableStack, globalInfo), this.right.generateM(variableStack, globalInfo));
            case '|':
                return Functions.Number_BitwiseOr(this.left.generateM(variableStack, globalInfo), this.right.generateM(variableStack, globalInfo));
            case '^':
                return Functions.Number_BitwiseXor(this.left.generateM(variableStack, globalInfo), this.right.generateM(variableStack, globalInfo));
            case '%':
                return Functions.Number_Mod(this.left.generateM(variableStack, globalInfo), this.right.generateM(variableStack, globalInfo));
            default:
                throw new Error('only + - * / & | ^ % are supported as binary operator');
        }
    }
}

export class AggregateFunctionExpression extends BaseExpression {
    public parameter: BaseExpression | '*';
    public aggregateType: AggregateTypeEnum;
    public overClause?: OverClause;
    constructor (_aggregateType, _parameter) {
        super();
        this.aggregateType = _aggregateType;
        this.parameter = _parameter;
    }

    public generateM(variableStack: VariableStack, globalInfo: {[key: string]: any}) {
        switch (this.aggregateType) {
            case AggregateTypeEnum.SUM:
                return Functions.List_Sum((this.parameter as BaseExpression).generateM(variableStack, globalInfo));
            case AggregateTypeEnum.AVG:
                return Functions.List_Average((this.parameter as BaseExpression).generateM(variableStack, globalInfo));
            case AggregateTypeEnum.COUNT:
                if (this.parameter instanceof BaseExpression) {
                    return Functions.List_Count((this.parameter as BaseExpression).generateM(variableStack, globalInfo))
                } else {
                    return Functions.List_Count(globalInfo[GlobalKeyEnum.TABLE]);
                }
            case AggregateTypeEnum.STDEV:
                return Functions.List_StandardDeviation((this.parameter as BaseExpression).generateM(variableStack, globalInfo));
            case AggregateTypeEnum.MAX:
                return Functions.List_Max((this.parameter as BaseExpression).generateM(variableStack, globalInfo));
            case AggregateTypeEnum.MIN:
                return Functions.List_Min((this.parameter as BaseExpression).generateM(variableStack, globalInfo));
            case AggregateTypeEnum.VAR:
            case AggregateTypeEnum.VARP:
            case AggregateTypeEnum.STDEVP:
            case AggregateTypeEnum.COUNT_BIG:
            default:
                throw new Error('unsupported aggregate function');
        }
    }
}

export class DistinctExpression extends BaseExpression {
    public expression: BaseExpression;

    constructor (_expression: BaseExpression) {
        super();
        this.expression = _expression;
    }

    public generateM(variableStack: VariableStack, globalInfo: {[key: string]: any}) {
        return Functions.List_Distinct(this.expression.generateM(variableStack, globalInfo));
    }
}

export class ColumnExpression extends BaseExpression {
    public column: Column;
    constructor(_column: Column) {
        super();
        this.column = _column;
    }

    public generateM(variableStack: VariableStack, globalInfo: {[key: string]: any}) {
        if (this.column.tableNameOrAlias) {
            return new M.FieldAccessExpression(globalInfo[GlobalKeyEnum.TABLE], `${this.column.tableNameOrAlias}.${this.column.columnName}`);
        } else {
            const fullColumnName_M = Functions.Custom_GetTableName(new M.StringExpression(this.column.columnName), globalInfo[GlobalKeyEnum.META_LIST_M]);
            return Functions.Record_Field(globalInfo[GlobalKeyEnum.TABLE], fullColumnName_M);
        }
    }
}

export class OverClause {
    public partitionExpressionList?: BaseExpression[];
    public orderByClause?;
    public rowOrRangeClause?;
}

export class SubqueryExpression extends BaseExpression {
    public subquery: Select;
    constructor (_subquery: Select) {
        super();
        this.subquery = _subquery;
    }

    public generateM(variableStack: VariableStack) {
        return this.subquery.generateM();
    }
}

export enum AggregateTypeEnum {
    AVG='AVG',
    SUM='SUM',
    MIN='MIN',
    MAX='MAX',
    STDEV='STDEV',
    STDEVP='STDEVP',
    VAR='VAR',
    VARP='VARP',
    COUNT='COUNT',
    COUNT_BIG='COUNT_BIG'
}

export type PrimitiveValue = string | boolean | number;