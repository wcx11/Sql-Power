export class Expression {
    valueType?: ValueTypeEnum;
}

export type ExpressionOrConst = Expression | number | boolean | string;

export enum ValueTypeEnum {
    STRING = 'STRING',
    TABLE = 'TABLE',
    LIST = 'LIST',
    RECORD = 'RECORD'
}

export class Value extends Expression {
}

export class List extends Value {
    items: ExpressionOrConst[];

    constructor(_items: ExpressionOrConst[]) {
        super();
        this.items = _items;
    }

    public toString(): string {
        return `{${this.items.map(item=>item.toString()).join(',')}}`;
    }
}

export class Record extends Value{
    pairs: [string, ExpressionOrConst] [];

    constructor (_pairs: [string, ExpressionOrConst] []) {
        super();
        this.pairs = _pairs;
    }

    public toString() {
        return `[${this.pairs.map(pair=> `${pair[0]}=${pair[1].toString()}`).join(',')}]`;
    }
}

export class StringExpression extends Value {
    value: string;

    constructor(_value: string) {
        super();
        this.value = _value;
    }

    public toString() {
        return `"${this.value}"`;
    }
}

export class VariableExpression extends Expression {
    name: string;

    constructor(_name: string) {
        super();
        this.name = _name;
    }

    public toString() {
        return this.name;
    }
}

export class InvokeFunctionExpression extends Expression {
    name: string;
    parameters: ExpressionOrConst[];

    constructor(_name: string, ..._parameters: any[]) {
        super();
        this.name = _name;
        this.parameters = _parameters;
    }

    public toString() {
        return `${this.name}(${this.parameters.map(para => !(para===undefined || para===null) ? para.toString() : 'null').join(',')})`;
    }
}

export class FunctionDefinationExpression extends Expression {
    parameters: string[];
    functionBody: ExpressionOrConst;

    constructor(_parameters: string[], _functionBody: Expression) {
        super();
        this.parameters = _parameters;
        this.functionBody = _functionBody;
    }

    public toString() {
        return `(${this.parameters.join(',')}) => ${this.functionBody.toString()}`;
    }
}

export class EachExpression extends Expression {
    expr: ExpressionOrConst;

    constructor(_expr: ExpressionOrConst) {
        super();
        this.expr = _expr;
    }

    public toString(): string {
        return `each ${this.expr.toString()}`;
    }
}

export class LetExpression extends Expression {
    let: AssignExpression[];
    in: ExpressionOrConst;

    constructor() {
        super();
        this.let = [];
    }

    public toString(): string {
        return `let\n\t${this.let.map(l => l.toString()).join(',\n\t')}\nin\n\t${this.in.toString()}`
    }
}

export class AssignExpression extends Expression {
    name: string;
    value: ExpressionOrConst;

    constructor(_name, _value) {
        super();
        this.name = _name;
        this.value = _value;
    }

    public toString(): string {
        return `${this.name}=${this.value.toString()}`
    }
}

export class IfExpression extends Expression {
    condition: ExpressionOrConst;
    ifThen: ExpressionOrConst;
    elseThen: ExpressionOrConst;

    constructor(_condition: ExpressionOrConst, _ifThen: ExpressionOrConst, _elseThen: ExpressionOrConst) {
        super();
        this.condition = _condition;
        this.ifThen = _ifThen;
        this.elseThen = _elseThen;
    }

    public toString(): string {
        return `(if (${this.condition.toString()}) then ${this.ifThen.toString()} else ${this.elseThen.toString()})`;
    }
}

export class FieldAccessExpression extends Expression {
    expr: Expression;
    field: ExpressionOrConst;

    constructor(_expr: Expression, _field: ExpressionOrConst) {
        super();
        this.expr = _expr;
        this.field = _field;
    }

    toString() {
        return `${this.expr ? this.expr.toString() : ''}[${this.field.toString()}]`;
    }
}

export class IndexAccessExpression extends Expression {
    expr: Expression;
    index: number;

    constructor(_expr: Expression, _index: number) {
        super();
        this.expr = _expr;
        this.index = _index;
    }

    public toString() {
        return `${this.expr.toString()}{${this.index.toString()}}`;
    }
}

export class ItemAccessExpression extends Expression {
    expr: Expression;
    item: ExpressionOrConst;

    constructor(_expr: Expression, _item: Expression) {
        super();
        this.expr = _expr;
        this.item = _item;
    }

    public toString() {
        return `${this.expr.toString()}{${this.item.toString()}}`;
    }
}

export class AddMetaExpression extends Expression {
    expr: ExpressionOrConst;
    meta: Expression;

    constructor(_expr: Expression, _meta: Expression) {
        super();
        this.expr = _expr;
        this.meta = _meta;
    }

    public toString() {
        return `${this.expr.toString()} meta ${this.meta.toString()}`;
    }
}

export type BinaryOperator = '+' | '-' | '*' | '/' | '&';

export class BinaryExpression extends Expression {
    public op: BinaryOperator;
    public left: ExpressionOrConst;
    public right: ExpressionOrConst;

    constructor(_op: BinaryOperator, _left: ExpressionOrConst, _right: ExpressionOrConst) {
        super();
        this.op = _op;
        this.left = _left;
        this.right = _right;
    }

    public toString() {
        return `(${this.left.toString()} ${this.op} ${this.right.toString()})`;
    }
}

//unary operator '-'
export class NegativeExpression extends Expression {
    public expr: ExpressionOrConst;
    constructor(_expr: ExpressionOrConst) {
        super();
        this.expr = _expr;
    }

    public toString() {
        return `- ${this.expr.toString()}`;
    }
}

export abstract class ConditionExpression extends Expression {

}

export abstract class LogicalExpression extends ConditionExpression {

}

export class AndExpression extends LogicalExpression {
    public left: ConditionExpression | boolean;
    public right: ConditionExpression | boolean;
    constructor (_left: ConditionExpression | boolean, _right: ConditionExpression | boolean) {
        super();
        this.left = _left;
        this.right = _right;
    }

    public toString() {
        return `(${this.left.toString()} and ${this.right.toString})`;
    }
}

export class OrExpression extends LogicalExpression {
    public left: ConditionExpression | boolean;
    public right: ConditionExpression | boolean;
    constructor (_left: ConditionExpression | boolean, _right: ConditionExpression | boolean) {
        super();
        this.left = _left;
        this.right = _right;
    }

    public toString() {
        return `(${this.left.toString()} or ${this.right.toString})`;
    }
}

export class NotExpression extends LogicalExpression {
    public expr: ConditionExpression | boolean;

    constructor(_expr: ConditionExpression | boolean) {
        super();
        this.expr = _expr;
    }

    public toString() {
        return `(not ${this.expr.toString()})`
    }
}

export type ComparisonOperator = '=' | '>' | '<' | '<=' | '>=' | '<>';

export class ComparisionExpression extends ConditionExpression {
    public op: ComparisonOperator;
    public left: ExpressionOrConst;
    public right: ExpressionOrConst;

    constructor(_op: ComparisonOperator, _left: ExpressionOrConst, _right: ExpressionOrConst) {
        super();
        this.op = _op;
        this.left = _left;
        this.right = _right;
    }

    public toString(): string {
        return `(${this.left.toString()} ${this.op} ${this.right.toString()})`;
    }
}

export class ErrorExpression extends Expression {
    public message: string;

    constructor(_message: string) {
        super();
        this.message = _message;
    }

    public toString(): string {
        return `error ${new StringExpression(this.message)}`
    }
}