import { Table } from 'dynamodb-toolbox';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { CategoryRepository } from "../category/category-service";
import { HouseholdRepository } from "../household/household-service";
import { ListItemRepository } from "../listItem/list-item-service";
import { ProductRepository } from "../product/product-service";
import { UnitRepository } from "../unit/unit-service";
import { UserRepository } from "../user/user-service";

type Repository = CategoryRepository & HouseholdRepository & ListItemRepository & ProductRepository & UnitRepository & UserRepository;

export const repository = (documentClient: DocumentClient, tableName: string) : Repository => {
  // const tableClient = new Table({
  //   name: tableName,
  //   partitionKey: 'hash',
  //   sortKey: 'range',
  //   indexes: {
  //     gsi1: { partitionKey: 'gsi1hash', sortKey: 'range' }
  //   },
  //   DocumentClient: documentClient
  // });
  return {
    getCategory: (householdId, categoryId) => {
      return Promise.resolve({
        id: 'id',
        householdId,
        categoryId,
        name: 'dummy'
      });
    },
    getCategories: (householdId, paginationOptions)=> {
      return Promise.resolve([{id: 'id',
      householdId,
      categoryId: 'cat',
      name: 'dummy'}]);
    },
    putCategory: (householdId, proposedCategory) => {
      return Promise.resolve({
        id: 'id',
        ...proposedCategory
      })
    },
    deleteCategory: (householdId, categoryId) => {
      return Promise.resolve();
    },
    getHousehold: (householdId) => {
      return Promise.resolve({
        id: householdId,
        name: 'household',

      })
    },
    putHousehold: (proposedHousehold)=> {
      return Promise.resolve(
        proposedHousehold
      )
    },
    deleteHousehold: (householdId)=> {
      return Promise.resolve();
    },
    
    getListItem: (householdId, listItemId)=> {
      return Promise.resolve({
        id: 'id',
        collected: true,
        productId: 'product',
        quantity: 1,
        unit: 'unit',
        user: 'user',
        updatedAt: new Date()
      })
    },
    getListItems: (householdId, paginationOptions)=> {
      return Promise.resolve([{
        id: 'id',
        collected: true,
        productId: 'product',
        quantity: 1,
        unit: 'unit',
        user: 'user',
        updatedAt: new Date()
      }])
    },
    getUncollectedItems: (householdId, paginationOptions)=> {
      return Promise.resolve([{
        id: 'id',
        collected: false,
        productId: 'product',
        quantity: 1,
        unit: 'unit',
        user: 'user',
        updatedAt: new Date()
      }])
    },
    putListItem: (householdId, proposedListItem)=> {
      return Promise.resolve({
        id: 'id',
        collected: true,
        productId: 'product',
        quantity: 1,
        unit: 'unit',
        user: 'user',
        updatedAt: new Date()
      })
    },
    deleteListItem: (householdId, listItemId)=> {
      return Promise.resolve();
    },
    getProduct: (householdId, productId)=> {
      return Promise.resolve({
        id: 'id',
        name: 'prod',
        defaultUnit: 'un',
      })
    },
    getProducts: (householdId, paginationOptions)=> {
      return Promise.resolve([{
        id: 'id',
        name: 'prod',
        defaultUnit: 'un',
      }])
    },
    putProduct: (householdId, product)=> {
      return Promise.resolve({
        id: 'id',
        name: 'prod',
        defaultUnit: 'un',
      })
    },
    deleteProduct: (householdId, productId)=> {
      return Promise.resolve();
    },
    
    getUnit: (householdId, unitId)=> {
        return Promise.resolve({
          id: 'id',
          name: 'kilo',
          symbol: 'kg'
        })
    },
    getUnits: (householdId, paginationOptions)=> {
      return Promise.resolve([{
        id: 'id',
        name: 'kilo',
        symbol: 'kg'
      }])
    },
    putUnit: (householdId, unit) => {
      return Promise.resolve(unit)
    },
    deleteUnit: (householdId, unitId)=> {
      return Promise.resolve();
    },
    getUser: (householdId, userId)=> {
      return Promise.resolve({
        id: 'id',
        name: 'user',
        email: 'u@u.com'
      });
    },
    getUsers: (householdId, paginationOptions)=> {
      return Promise.resolve([{
        id: 'id',
        name: 'user',
        email: 'u@u.com'
      }])
    },
    putUser: (householdId, user)=> {
      return Promise.resolve(user)
        
    },
    deleteUser: (householdId, userId)=> {
      return Promise.resolve();
    },
  }
} 
