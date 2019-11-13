import { Column } from "./Table";
import { Select } from "./Select";

export abstract class BaseExpression {
    public calculate () {}
}

export class PrimitiveExpression extends BaseExpression {
    public value: PrimitiveValue;
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
}

export class DistinctExpression extends BaseExpression {
    public expression: BaseExpression;

    constructor (_expression: BaseExpression) {
        super();
        this.expression = _expression;
    }
}

export class ColumnExpressoin extends BaseExpression {
    public column: Column;
    constructor(_column: Column) {
        super();
        this.column = _column;
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