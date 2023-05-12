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
  const tableClient = new Table({
    name: tableName,
    partitionKey: 'hash',
    sortKey: 'range',
    indexes: {
      gsi1: { partitionKey: 'gsi1hash', sortKey: 'range' }
    },
    DocumentClient: documentClient
  });
  return {
    getCategory(householdId, categoryId) {
      
    },
  }
} 
