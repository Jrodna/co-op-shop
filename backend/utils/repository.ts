import {Table} from 'dynamodb-toolbox';
import {DocumentClient} from 'aws-sdk/clients/dynamodb';
import {CategoryRepository} from '../category/category-service';
import {HouseholdRepository} from '../household/household-service';
import {ListItemRepository} from '../listItem/list-item-service';
import {ProductRepository} from '../product/product-service';
import {UnitRepository} from '../unit/unit-service';
import {UserRepository} from '../user/user-service';
import {getCategoryEntity} from '../category/entity-config';
import {mapCategoryToEntity} from '../category/category-mapping';

type Repository = CategoryRepository &
  HouseholdRepository &
  ListItemRepository &
  ProductRepository &
  UnitRepository &
  UserRepository;

export const repository = (documentClient: DocumentClient, tableName: string): Repository => {
  const tableClient = new Table({
    name: tableName,
    partitionKey: 'part',
    sortKey: 'sort',
    indexes: {
      lsi1: {sortKey: 'lsi1Sort'},
      gsi1: {partitionKey: 'gsi1Part', sortKey: 'gsi1Sort'},
    },
    DocumentClient: documentClient,
  });

  const categoryEntity = getCategoryEntity(tableClient);
  return {
    getCategory: (householdId, categoryId) =>
      categoryEntity.get({part: categoryPart(householdId), sort: categorySort(categoryId)}),
    getCategories: async (householdId, paginationOptions) => {
      const queryResult = await categoryEntity.query(categoryPart(householdId), {
        limit: paginationOptions.limit || 100,
        index: 'lsi1',
        ...(paginationOptions.scanDirection === 'backward'
          ? {lt: paginationOptions.cursor, reverse: true}
          : {gt: paginationOptions.cursor}),
      });
      return queryResult.Items || [];
    },
    putCategory: (householdId, proposedCategory) =>
      categoryEntity.put(mapCategoryToEntity(householdId, proposedCategory)),
    deleteCategory: (householdId, categoryId) =>
      categoryEntity.delete({part: categoryPart(householdId), sort: categorySort(categoryId)}),
    getHousehold: householdId => {
      return Promise.resolve({
        id: householdId,
        name: 'household',
      });
    },
    putHousehold: proposedHousehold => {
      return Promise.resolve(proposedHousehold);
    },
    deleteHousehold: householdId => {
      return Promise.resolve();
    },

    getListItem: (householdId, listItemId) => {
      return Promise.resolve({
        id: 'id',
        collected: true,
        productId: 'product',
        quantity: 1,
        unit: 'unit',
        user: 'user',
        updatedAt: new Date(),
      });
    },
    getListItems: (householdId, paginationOptions) => {
      return Promise.resolve([
        {
          id: 'id',
          collected: true,
          productId: 'product',
          quantity: 1,
          unit: 'unit',
          user: 'user',
          updatedAt: new Date(),
        },
      ]);
    },
    getUncollectedItems: (householdId, paginationOptions) => {
      return Promise.resolve([
        {
          id: 'id',
          collected: false,
          productId: 'product',
          quantity: 1,
          unit: 'unit',
          user: 'user',
          updatedAt: new Date(),
        },
      ]);
    },
    putListItem: (householdId, proposedListItem) => {
      return Promise.resolve({
        id: 'id',
        collected: true,
        productId: 'product',
        quantity: 1,
        unit: 'unit',
        user: 'user',
        updatedAt: new Date(),
      });
    },
    deleteListItem: (householdId, listItemId) => {
      return Promise.resolve();
    },
    getProduct: (householdId, productId) => {
      return Promise.resolve({
        id: 'id',
        name: 'prod',
        defaultUnit: 'un',
      });
    },
    getProducts: (householdId, paginationOptions) => {
      return Promise.resolve([
        {
          id: 'id',
          name: 'prod',
          defaultUnit: 'un',
        },
      ]);
    },
    putProduct: (householdId, product) => {
      return Promise.resolve({
        id: 'id',
        name: 'prod',
        defaultUnit: 'un',
      });
    },
    deleteProduct: (householdId, productId) => {
      return Promise.resolve();
    },

    getUnit: (householdId, unitId) => {
      return Promise.resolve({
        id: 'id',
        name: 'kilo',
        symbol: 'kg',
      });
    },
    getUnits: (householdId, paginationOptions) => {
      return Promise.resolve([
        {
          id: 'id',
          name: 'kilo',
          symbol: 'kg',
        },
      ]);
    },
    putUnit: (householdId, unit) => {
      return Promise.resolve(unit);
    },
    deleteUnit: (householdId, unitId) => {
      return Promise.resolve();
    },
    getUser: (householdId, userId) => {
      return Promise.resolve({
        id: 'id',
        name: 'user',
        email: 'u@u.com',
      });
    },
    getUsers: (householdId, paginationOptions) => {
      return Promise.resolve([
        {
          id: 'id',
          name: 'user',
          email: 'u@u.com',
        },
      ]);
    },
    putUser: (householdId, user) => {
      return Promise.resolve(user);
    },
    deleteUser: (householdId, userId) => {
      return Promise.resolve();
    },
  };
};
