import { Entity, Table } from 'dynamodb-toolbox';

export const getUserEntity = (tableClient: Table<string, 'part', 'sort'>) =>
  new Entity({
    name: 'USER',
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
