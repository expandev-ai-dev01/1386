export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface SortParams {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: any;
}

export interface BaseEntity {
  id: number;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}
