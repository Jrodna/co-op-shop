import { Entity, Table } from 'dynamodb-toolbox';

export const getUnitEntity = (tableClient: Table<string, 'part', 'sort'>) =>
  new Entity({
    name: 'UNIT',
    // Define attributes
    attributes: {
      part: { partitionKey: true },
      sort: { sortKey: true },
      index: { partitionKey: 'gsi1', hidden: true },
      id: { type: 'string', required: true },
      name: { type: 'string', required: true },
    },

    table: tableClient
  } as const);
