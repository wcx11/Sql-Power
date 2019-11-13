import { BaseExpression } from "./Expression";
import { Select } from "./Select";

export abstract class SearchConditionExpression extends BaseExpression {

}

export class LogicalExpression extends SearchConditionExpression {
}

export class AndExpression extends LogicalExpression {
    public left: BaseExpression;
    public right: BaseExpression;
    constructor (_left: BaseExpression, _right: BaseExpression) {
        super();
        this.left = _left;
        this.right = _right;
    }
}

export class OrExpression extends LogicalExpression {
    public left: BaseExpression;
    public right: BaseExpression;
    constructor (_left: BaseExpression, _right: BaseExpression) {
        super();
        this.left = _left;
        this.right = _right;
    }
}

export class NotExpression extends LogicalExpression {
    expr: BaseExpression;
    constructor (_expr: BaseExpression) {
        super();
        this.expr = _expr;
    }
}

export type ComparisonOperator = '=' | '>' | '<' | '<=' | '>=' | '<>' | '!=' | '!>' | '!<';

export class ComparisonExpression extends SearchConditionExpression {
    public op: ComparisonOperator;
    public left: BaseExpression;
    public right: BaseExpression;

    constructor(_op: ComparisonOperator, _left: BaseExpression, _right: BaseExpression) {
        super();
        this.op = _op;
        this.left = _left;
        this.right = _right;
    }
}

export enum ComparisonTypeEnum {
    ALL = 'ALL',
    ANY = 'ANY'
}

export class ListComparisonExpression extends SearchConditionExpression {
    op: ComparisonOperator;
    left: BaseExpression;
    right: Select | BaseExpression[];
    comparisonType: ComparisonTypeEnum;

    constructor(_op: ComparisonOperator, _left: BaseExpression, _right: Select | BaseExpression[], _type: ComparisonTypeEnum) {
        super();
        this.op = _op;
        this.left = _left;
        this.right = _right;
        this.comparisonType = _type;
    }
}

export class LikeExpression extends SearchConditionExpression {
    expr: BaseExpression;
    likeExpr: BaseExpression;
    escapeExpr: BaseExpression;
}

export class CheckNullExpression extends SearchConditionExpression {
    isNull: boolean;
    expr: BaseExpression;
    constructor(_isNull: boolean, _expr: BaseExpression) {
        super();
        this.isNull = _isNull;
        this.expr = _expr;
    }
}
