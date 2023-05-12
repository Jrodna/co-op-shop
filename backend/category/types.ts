import { WithId } from "../utils/types";

export type Category = {
  id: string;
  name: string;
}

export type ProposedCategory = {
  name: string;
}

export type ProposedCategoryUpdate = ProposedCategory & WithId
