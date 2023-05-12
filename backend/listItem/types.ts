import { Product } from "../product/types";
import { Unit } from "../unit/types";
import { User } from "../user/types";
import { WithId } from "../utils/types";

export type ListItem = {
  id: string;
  productId: string;
  quantity: number;
  unit?: string;
  updatedAt: Date;
  collected: boolean;
  user: string;
}

export type ProposedListItem = {
  productId: string;
  quantity: number;
  unit: string;
  userId: string;
}

export type ProposedListItemUpdate = ProposedListItem & WithId

export type HydratedListItem = {
  id: string;
  product: Product;
  unit: Unit;
  quantity: number;
  collected: boolean;
  user: User;
}
