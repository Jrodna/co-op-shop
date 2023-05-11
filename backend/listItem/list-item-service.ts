import { ListItem, ProposedListItem } from "./types"

export type ListItemRepository = {
  putListItem: (householdId: string, proposedListItem: ListItem) => Promise<ListItem>;
  deleteListItem: (householdId: string, listItemId: string) => Promise<void>;
  getListItem: (householdId: string, listItemId: string) => Promise<ListItem>;
  getUncollectedItems: (householdId: string) => Promise<ListItem[]>;
  getAllListItems: (householdId: string) => Promise<ListItem[]>;
}
