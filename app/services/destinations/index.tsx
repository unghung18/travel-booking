import { IDestination } from "@/app/services/destinations/type";
import { BaseResponse, CommonSearch, IID, PageResponse } from "@/app/types";
import { fetcher } from "@/lib/fetcher";

const BASE_URL = "/destinations";

export const DestinationService = {
  getPopular: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<IDestination>>(BASE_URL + "/list", {
      method: "get",
      params,
      next: { revalidate: 3000 },
    }),
  getAll: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<IDestination>>(BASE_URL + "/list", {
      method: "get",
      params,
      cache: "no-cache",
    }),

  getById: (id: number) =>
    fetcher<BaseResponse<IDestination>>(`${BASE_URL}/${id}`, {
      method: "get",
    }),

  create: (data: Partial<IDestination>) =>
    fetcher<BaseResponse<IID>>(BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (id: number, data: Partial<IDestination>) =>
    fetcher<BaseResponse<IID>>(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    fetcher<BaseResponse<null>>(`${BASE_URL}/${id}`, {
      method: "DELETE",
    }),
};
