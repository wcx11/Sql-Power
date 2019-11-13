import { Select } from './Select';
import { JoinedTable as TableSource } from './Table';
import { BaseExpression } from './Expression';

export class Query {
    select: Select;
    from: TableSource[];
    where: undefined;
    having: undefined;
    sort: undefined;
}