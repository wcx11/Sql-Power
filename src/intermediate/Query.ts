import { Select } from './Select';
import { JoinedTable as TableSource } from './Table';

export class Query {
    select: Select;
    from: TableSource[];
    where: undefined;
    having: undefined;
    sort: undefined;
}