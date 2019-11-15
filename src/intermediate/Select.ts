import { Query } from "./Query";
import { BaseExpression } from "./Expression";
import { VariableStack } from "../m/Variable";
import { LetExpression } from "../m/M";

export class Select {
    query: Query;
    order: Order;

    public generateM() {
        let variableStack: VariableStack = new VariableStack();
        const letExpression = new LetExpression();
        variableStack.newScope();
        if (this.query.from) {
            letExpression.let.push(...this.query.from.map(table => table.generateM(variableStack)));
        }
    }
}

export class Order {
    expression: BaseExpression;
    orderType: OrderTypeEnum;

    constructor() {
        this.orderType = OrderTypeEnum.ASC;
    }
}

export enum OrderTypeEnum {
    ASC = 'ASC',
    DESC = 'DESC'
}