import { PaginationOptions } from "../utils/types";
import { Category, ProposedCategory } from "./types"

export type CategoryRepository = {
  putCategory: (householdId: string, proposedCategory: ProposedCategory) => Promise<Category>;
  deleteCategory: (householdId: string, categoryId: string) => Promise<void>;
  getCategory: (householdId: string, categoryId: string) => Promise<Category | undefined>;
  getCategories: (householdId: string, paginationOptions: PaginationOptions) => Promise<Category[]>;
}

