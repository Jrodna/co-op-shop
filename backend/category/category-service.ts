import {DeleteItemOutput, PutItemOutput} from 'aws-sdk/clients/dynamodb';
import {PaginationOptions} from '../utils/types';
import {Category, ProposedCategory} from './types';

export type CategoryRepository = {
  putCategory: (householdId: string, proposedCategory: ProposedCategory) => Promise<Omit<PutItemOutput, 'Attributes'>>;
  deleteCategory: (householdId: string, categoryId: string) => Promise<Omit<DeleteItemOutput, 'Attributes'>>;
  getCategory: (householdId: string, categoryId: string) => Promise<Category | undefined>;
  getCategories: (householdId: string, paginationOptions: PaginationOptions) => Promise<Category[]>;
};
