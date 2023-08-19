import {Entity, Table} from 'dynamodb-toolbox';

export const getListItemEntity = (tableClient: Table<string, 'part', 'sort'>) =>
  new Entity({
    name: 'LIST_ITEM',
    // Define attributes
    attributes: {
      part: {partitionKey: true},
      sort: {sortKey: true},
      index: {partitionKey: 'gsi1', hidden: true},
      id: {type: 'string', required: true},
      productId: {type: 'string', required: true},
      unit: {type: 'string'},
      collected: {type: 'boolean', required: true},
      user: {type: 'string'},
    },

    table: tableClient,
  } as const);
