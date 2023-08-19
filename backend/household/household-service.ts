import {Household, ProposedHousehold} from './types';

export type HouseholdRepository = {
  putHousehold: (proposedHousehold: Household) => Promise<Household>;
  getHousehold: (householdId: string) => Promise<Household>;
  deleteHousehold: (householdId: string) => Promise<void>;
};
