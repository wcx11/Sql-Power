export class Table {

}

export class List {

}

export class Expression {

}

export class LetExpression extends Expression {

}

export class AssignExpression extends Expression {
    name: string;
    value: Expression;
}

export class IfExpression extends Expression {
    condition: ConditionExpression;
    ifThen: Expression;
    elseThen: Expression;
}

export class ConditionExpression extends Expression {

}

export function SelectRowsFromTable() {

}

export function SelectColumnsFromTable() {

}