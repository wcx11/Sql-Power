import * as M from './M';

export class VariableStack {
    public sheets: VariableSheet[];
    constructor () {
        this.sheets = [];
    }

    public push(variableSheet: VariableSheet) {
        this.sheets.push(variableSheet);
    }

    public pop(): VariableSheet {
        return this.sheets.pop();
    }

    public top(): VariableSheet {
        if (this.sheets.length == 0) {
            return null;
        }

        return this.sheets[this.sheets.length - 1];
    }
}

export type VariableSheet = {[name: string]: M.Expression}