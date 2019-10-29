export class Table {
    name: string;
}

export class JoinedTable {
    table: Table;
    joinedPart: Table | JoinedTable;
}