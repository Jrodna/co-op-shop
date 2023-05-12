import { Page, PaginationOptions } from "../utils/types";
import { Product } from "./types"

export type ProductRepository = {
  putProduct: (householdId: string, product: Product) => Promise<Product>;
  getProduct: (householdId: string, productId: string) => Promise<Product>;
  deleteProduct: (householdId: string, productId: string) => Promise<void>;
  getProducts: (householdId: string, paginationOptions: PaginationOptions) => Promise<Product[]>;
}
