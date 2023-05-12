import { WithId } from "../utils/types";

export type User = {
  id: string;
  name: string;
  email: string;
}

export type ProposedUser = {
  name: string;
  email: string;
}

export type ProposedUserUpdate = ProposedUser & WithId
