import { PaginationOptions } from "../utils/types";
import { User } from "./types";

export type UserRepository = {
  getUser: (householdId: string, userId: string) => Promise<User>;
  putUser: (householdId: string, user: User) => Promise<User>;
  deleteUser: (householdId: string, userId: string) => Promise<void>;
  getUsers: (householdId: string, paginationOptions: PaginationOptions) => Promise<User[]>;
}
