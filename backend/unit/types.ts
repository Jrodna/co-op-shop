import { WithId } from "../utils/types";

export type Unit = {
  id: string;
  name: string;
  symbol: string;
}

export type ProposedUnit = {
  name?: string;
  symbol?: string;
}

export type ProposedUnitUpdate = ProposedUnit & WithId
