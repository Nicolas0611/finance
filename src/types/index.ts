export interface PaginationMeta {
  page:       number;
  pageSize:   number;
  total:      number;
  totalPages: number;
}

export interface ApiListResponse<T> {
  data: T[];
  meta: PaginationMeta;
}
