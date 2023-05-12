import { WithId } from "../utils/types";

export type Product = {
  id: string
  name: string;
  category?: string;
  brand?: string;
  defaultUnit: string;
  allowedUnits?: string[];
}

export type ProposedProduct = {
  name: string;
  category?: string;
  brand?: string;
  defaultUnit?: string
}

export type ProposedProductUpdate = ProposedProduct & WithId
