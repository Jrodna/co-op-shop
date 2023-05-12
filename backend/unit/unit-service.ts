import { PaginationOptions } from "../utils/types";
import { Unit } from "./types"

export type UnitRepository = {
  getUnit : (householdId: string, unitId: string) => Promise<Unit>;
  putUnit: (householdId: string, unit: Unit) => Promise<Unit>;
  deleteUnit: (householdId: string, unitId: string) => Promise<void>;
  getUnits: (householdId: string, paginationOptions: PaginationOptions) => Promise<Unit[]>;
}
