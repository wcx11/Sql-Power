import { Query } from "./Query";
import { BaseExpression } from "./Expression";
import { VariableStack } from "../m/Variable";
import * as M from "../m/M";
import * as Utils from "../m/Utils";

export class Select {
    query: Query;
    order: Order;

    public generateM(): M.Expression {
        let variableStack: VariableStack = new VariableStack();
        const letExpression = new M.LetExpression();
        variableStack.newScope();
        let tableSource_M: M.ExpressionOrConst = null;
        let tableSourceName: string;
        if (this.query.from && this.query.from.length > 0) {
            const table_M_List = this.query.from.map(table => table.generateM(variableStack));
            tableSource_M = this.query.from.length === 1 ?
                table_M_List[0] :
                Utils.combineTables(table_M_List, variableStack);
            tableSourceName = this.query.from.length === 1 ? this.query.from[0].getVariableName(variableStack) : variableStack.getName('combinedSource');
        }


        letExpression.let.push(new M.AssignExpression(tableSourceName, tableSource_M));
        letExpression.in = tableSourceName;
        return letExpression;
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