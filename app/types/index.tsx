export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export interface BaseResponse<T> {
  message: string;
  code: string;
  data: T;
}

export interface PageResponse<T> {
  message: string;
  code: string;
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface CommonSearch {
  page?: number;
  size?: number;
  search?: string;
}

export interface IID {
  id: number;
}

export interface CommonObject {
  id: number;
  code?: string;
  name?: string;
}
