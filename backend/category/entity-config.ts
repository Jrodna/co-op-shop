import {Entity, Table} from 'dynamodb-toolbox';

export const getCategoryEntity = (tableClient: Table<string, 'part', 'sort'>) =>
  new Entity({
    name: 'CATEGORY',
    // Define attributes
    attributes: {
      part: {partitionKey: true},
      sort: {sortKey: true},
      lsi1Sort: {hidden: true},
      id: {type: 'string', required: true},
      name: {type: 'string', required: true},
      created: {type: 'string', required: true},
    },

    table: tableClient,
  } as const);
