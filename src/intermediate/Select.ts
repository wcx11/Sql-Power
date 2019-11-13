import { Query } from "./Query";
import { BaseExpression } from "./Expression";

export class Select {
    query: Query;
    order: Order;
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