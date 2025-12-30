import { ITour } from "@/app/services/tours/type";
import { BaseResponse, CommonSearch, IID, PageResponse } from "@/app/types";
import { fetcher } from "@/lib/fetcher";

const BASE_URL = "/tours";

export const TourService = {
  getPopular: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<ITour>>(BASE_URL + "/list", {
      method: "get",
      params,
    }),
  getAll: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<ITour>>(BASE_URL + "/list", {
      method: "get",
      params,
      cache: "no-cache",
    }),

  getById: (id: number) =>
    fetcher<BaseResponse<ITour>>(`${BASE_URL}/${id}`, {
      method: "get",
    }),

  create: (data: Partial<ITour>) =>
    fetcher<BaseResponse<IID>>(BASE_URL, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  update: (id: number, data: Partial<ITour>) =>
    fetcher<BaseResponse<IID>>(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: (id: number) =>
    fetcher<BaseResponse<null>>(`${BASE_URL}/${id}`, {
      method: "DELETE",
    }),
};
