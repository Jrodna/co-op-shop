import {uuid} from 'uuidv4';
import {Category, ProposedCategory} from './types';

export const mapCategoryToEntity = (householdId: string, proposedCategory: ProposedCategory) => {
  const id = uuid();
  const created = new Date().toISOString();
  return {
    ...proposedCategory,
    id,
    created,
    part: categoryPart(householdId),
    sort: categorySort(id),
    lsi1Range: `${proposedCategory.name}:${created}`,
  };
};
