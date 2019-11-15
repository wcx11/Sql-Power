export class Expression {
    valueType?: ValueTypeEnum;
}

export enum ValueTypeEnum {
    STRING = 'STRING',
    TABLE = 'TABLE',
    LIST = 'LIST',
    RECORD = 'RECORD'
}

export class Value extends Expression {
}

/*export class Table extends Value {

}

export class List extends Value {
}*/

export class Record extends Value{
    pairs: [string, Expression] [];

    constructor (_pairs) {
        super();
        this.pairs = _pairs;
    }
    public toString() {
        return `[${this.pairs.map(pair=> `${pair[0]}=${pair[1].toString()}`).join(',')}}]`;
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

export class FunctionExpression extends Expression {
    name: string;
    parameters: any[];

    constructor(_name: string, ..._parameters: any[]) {
        super();
        this.name = _name;
        this.parameters = _parameters;
    }

    public toString() {
        return `${this.name}(${this.parameters.join(',')})`;
    }
}

export class LetExpression extends Expression {
    let: AssignExpression[];
    in: Expression;

    constructor() {
        super();
        this.let = [];
    }
}

export class AssignExpression extends Expression {
    name: string;
    value: Expression;

    constructor(_name, _value) {
        super();
        this.name = _name;
        this.value = _value;
    }
}

export class IfExpression extends Expression {
    condition: ConditionExpression;
    ifThen: Expression;
    elseThen: Expression;
}

export class ConditionExpression extends Expression {

}

export class FieldAccessExpression extends Expression {
    expr: Expression;
    field: string;

    constructor(_expr: Expression, _field: string) {
        super();
        this.expr = _expr;
        this.field = _field;
    }

    toString() {
        return `${this.expr.toString()}[${this.field}]`;
    }
}

export class IndexAccessExpression extends Expression {
    expr: Expression;
    index: number;
}

export class ItemAccessExpression extends Expression {
    expr: Expression;
    item: Expression;

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
    expr: Expression;
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