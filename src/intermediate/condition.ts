import { BaseExpression } from './Expression';
import { Select } from './Select';
import { VariableStack } from '../m/Variable';
import * as M from '../m/M'
import * as Functions from '../m/Functions';

export abstract class SearchConditionExpression extends BaseExpression {
    public abstract generateM(variableStack: VariableStack, global: {[key: string]: any}): M.ConditionExpression;
}

export abstract class LogicalExpression extends SearchConditionExpression {
}

export class AndExpression extends LogicalExpression {
    public left: SearchConditionExpression | boolean;
    public right: SearchConditionExpression | boolean;
    constructor (_left: SearchConditionExpression | boolean, _right: SearchConditionExpression | boolean) {
        super();
        this.left = _left;
        this.right = _right;
    }

    public generateM(variableStack: VariableStack, global: {[key: string]: any}) {
        return new M.AndExpression(
            (this.left instanceof SearchConditionExpression) ? this.left.generateM(variableStack, global) : this.left,
            (this.right instanceof SearchConditionExpression) ? this.right.generateM(variableStack, global) : this.right 
        );
    }
}

export class OrExpression extends LogicalExpression {
    public left: SearchConditionExpression | boolean;
    public right: SearchConditionExpression | boolean;
    constructor (_left: SearchConditionExpression | boolean, _right: SearchConditionExpression | boolean) {
        super();
        this.left = _left;
        this.right = _right;
    }

    public generateM(variableStack: VariableStack, global: {[key: string]: any}) {
        return new M.OrExpression(
            (this.left instanceof SearchConditionExpression) ? this.left.generateM(variableStack, global) : this.left,
            (this.right instanceof SearchConditionExpression) ? this.right.generateM(variableStack, global) : this.right 
        );
    }
}

export class NotExpression extends LogicalExpression {
    expr: SearchConditionExpression | boolean;
    constructor (_expr: SearchConditionExpression | boolean) {
        super();
        this.expr = _expr;
    }

    public generateM(variableStack: VariableStack, global: {[key: string]: any}) {
        return new M.NotExpression(
            (this.expr instanceof SearchConditionExpression) ? this.expr.generateM(variableStack, global) : this.expr,
        );
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

    public generateM(variableStack: VariableStack, global: {[key: string]: any}){
        const mOp = {'=':'=','>':'>','<':'<','<=':'<=','>=':'>=','<>':'<>','!=':'<>','!>':'<=','!<':'>='}[this.op];
        return new M.ComparisionExpression(mOp as M.ComparisonOperator, this.left.generateM(variableStack, global), this.right.generateM(variableStack, global));
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

    public generateM(variableStack: VariableStack, globalInfo): M.ConditionExpression {
        const para = variableStack.getName('r');
        const comparisonList = Functions.List_Transform(
            this.right instanceof Select ? this.right.generateM() : new M.List(this.right.map(r => r.generateM(variableStack, globalInfo))),
            new M.FunctionDefinationExpression(
                [para],
                new M.ComparisionExpression('=', this.left.generateM(variableStack, globalInfo), para)
            )
        );

        return this.comparisonType === ComparisonTypeEnum.ALL ? Functions.List_AllTrue(comparisonList) : Functions.List_AnyTrue(comparisonList);
    }
}

export class LikeExpression extends SearchConditionExpression {
    expr: BaseExpression;
    likeExpr: BaseExpression;
    escapeExpr: BaseExpression;

    public generateM(variableStack: VariableStack): M.ConditionExpression {
        throw new Error ('like will be supported in the future');
    }
}

export class CheckNullExpression extends SearchConditionExpression {
    isNull: boolean;
    expr: BaseExpression;
    constructor(_isNull: boolean, _expr: BaseExpression) {
        super();
        this.isNull = _isNull;
        this.expr = _expr;
    }

    public generateM(variableStack: VariableStack, global: {[key: string]: any}): M.ConditionExpression {
        return new M.ComparisionExpression(this.isNull ? '=' : '<>', this.expr.generateM(variableStack, global), null);
    }
}
