export abstract class BaseExpression {
}

export class PrimitiveExpression extends BaseExpression {
    public value: PrimitiveValue;
}

export class UnaryExpression extends BaseExpression {

}

export class FunctionExpression extends BaseExpression {
    
}

export type PrimitiveValue = string | boolean | number;