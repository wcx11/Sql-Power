export class Table {

}

export class List {

}

export class Expression {

}

export class FunctionExpression extends Expression {
    name: string;
    parameters: any[];

    constructor(_name: string, ..._parameters: any[]) {
        super();
        this.name = _name;
        this.parameters = _parameters;
    }
}

export class StringExpression extends Expression {
    value: string;

    constructor(_value: string) {
        super();
        this.value = _value;
    }
}

export class LetExpression extends Expression {
    let: AssignExpression[];
    in: Expression;
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