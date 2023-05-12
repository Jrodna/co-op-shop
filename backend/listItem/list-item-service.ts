import { PaginationOptions } from "../utils/types";
import { ListItem } from "./types"

export type ListItemRepository = {
  putListItem: (householdId: string, proposedListItem: ListItem) => Promise<ListItem>;
  deleteListItem: (householdId: string, listItemId: string) => Promise<void>;
  getListItem: (householdId: string, listItemId: string) => Promise<ListItem>;
  getUncollectedItems: (householdId: string, paginationOptions: PaginationOptions) => Promise<ListItem[]>;
  getListItems: (householdId: string, paginationOptions: PaginationOptions) => Promise<ListItem[]>;
}
