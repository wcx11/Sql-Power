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

    public depth(): number {
        return this.sheets.length;
    }

    public getName(suggest: string) {
        let replaceName: string = suggest;
        let offset = 1;
        while (Object.keys(this.top()).indexOf(replaceName) >= 0) {
            replaceName = suggest + "_" + offset;
            offset++;
        }
        this.top()[replaceName] = suggest;
        return replaceName;
    }
}

export type VariableSheet = {[name: string]: string}