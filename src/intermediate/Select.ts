import { Query } from "./Query";
import { BaseExpression } from "./Expression";
import { VariableStack } from "../m/Variable";

export class Select {
    query: Query;
    order: Order;

    public generateM() {
        let variableStack: VariableStack = new VariableStack();
        variableStack.push({});
        let sourceList: any[] = [];
        if (this.query.from) {
            sourceList = this.query.from.map(table => table.generateM(variableStack));
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