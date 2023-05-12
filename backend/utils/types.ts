export type WithId = {id: string}

export type PaginationOptions = {
  cursor?: string;
  limit?: number;
  scanDirection: 'forward' | 'backward'
}

export type PaginationInfo = {
  current?: string;
  next?: string;
  prev?: string;
  limit?: number;
  scanDirection: 'forward' | 'backward'
  itemsAfter?: number;
  itemsBefore?: number;
}

export type Page<T> = {
  results: T[],
  paginationInfo: PaginationInfo
}
