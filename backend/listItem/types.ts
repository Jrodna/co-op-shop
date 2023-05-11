import { Product } from "../product/types";
import { Unit } from "../unit/types";

export type ListItem = {
  id: string;
  productId: string;
  quantity: number;
  unit: string;
  updatedAt: Date;
  collected: boolean;
}

export type ProposedListItem = {
  productId: string;
  quantity: number;
  unit: string;
}

export type HydratedListItem = {
  id: string;
  product: Product;
  unit: Unit;
  quantity: number;
  collected: boolean;
}
