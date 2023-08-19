import {User} from '../user/types';
import {WithId} from '../utils/types';

export type Household = {
  id: string;
  name: string;
};

export type ProposedHousehold = {
  name: string;
};

export type ProposedHouseholdUpdate = ProposedHousehold & WithId;

export type HydratedHousehold = {
  id: string;
  users: User[];
  name: string;
};
