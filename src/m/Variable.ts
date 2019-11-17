import * as M from './M';

export class VariableStack {
    private scopeStart: number[];
    private variables: Variable[];

    constructor () {
        this.variables = [];
        this.scopeStart = [-1];
    }

    public push(variable: Variable) {
        this.variables.push(variable);
    }

    public pop(): Variable {
        return this.variables.pop();
    }

    public top(): Variable {
        if (this.variables.length == 0) {
            return null;
        }

        return this.variables[this.variables.length - 1];
    }

    public endScope(): number {
        if (this.getCurrentScopeStart() < 0) {
            return -1;
        }

        this.variables.length = this.scopeStart.pop();
        return this.variables.length;
    }

    public newScope() {
        this.scopeStart.push(this.variables.length);
    }

    public depth(): number {
        return this.variables.length;
    }

    public getCurrentScopeStart(): number {
        return this.scopeStart[this.scopeStart.length - 1];
    }

    public getCurrentScope(): Variable[] {
        return this.variables.slice(this.getCurrentScopeStart(), this.depth());
    }

    public getName(suggest: string) {
        let replaceName: string = suggest;
        let offset = 1;
        let currentScope = this.getCurrentScope();
        while (currentScope.find((v) => {v.name === replaceName})) {
            replaceName = suggest + "_" + offset;
            offset++;
        }
        
        return replaceName;
    }
}

export class Variable {
    name: string;
    originName: string;
    type?: string;
}

export class ColumnInfoStack {
    private scopeStart: number[];
    private columnInfo: ColumnInfo[];

    constructor () {
        this.columnInfo = [];
        this.scopeStart = [-1];
    }

    public push(columnInfo: ColumnInfo) {
        this.columnInfo.push(columnInfo);
    }

    public pop(): ColumnInfo {
        return this.columnInfo.pop();
    }

    public top(): ColumnInfo {
        if (this.columnInfo.length == 0) {
            return null;
        }

        return this.columnInfo[this.columnInfo.length - 1];
    }

    public endScope(): number {
        if (this.getCurrentScopeStart() < 0) {
            return -1;
        }

        this.columnInfo.length = this.scopeStart.pop();
        return this.columnInfo.length;
    }

    public newScope() {
        this.scopeStart.push(this.columnInfo.length);
    }

    public depth(): number {
        return this.columnInfo.length;
    }

    public getCurrentScopeStart(): number {
        return this.scopeStart[this.scopeStart.length - 1];
    }

    public getCurrentScope(): ColumnInfo[] {
        if (this.getCurrentScopeStart() < 0) {
            return null;
        }

        return this.columnInfo.slice(this.getCurrentScopeStart(), this.depth());
    }

    public renewColumnInfo() {
        
    }
}

export class ColumnInfo {
    columnName: string;
    tableName: string;

    constructor(_columnName, _tableName) {
        this.columnName = _columnName;
        this.tableName = _tableName;
    }
}

export enum GlobalKeyEnum {
    TABLE = 'TABLE',
    META = 'META',
    SOURCE = 'SOURCE'
}

export const METAKEY_COLUMNNAME = 'columnName';
export const METAKEY_TABLENAME = 'tableName';
export const META_COLUMNINFO = 'columnInfo';