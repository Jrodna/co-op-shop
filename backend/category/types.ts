import {WithId} from '../utils/types';

export type Category = {
  id: string;
  name: string;
  created: string;
};

export type ProposedCategory = {
  name: string;
};

export type ProposedCategoryUpdate = ProposedCategory & WithId;
