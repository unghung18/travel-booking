import { ITour } from "@/app/services/tours/type";
import { BaseResponse, CommonSearch, IID, PageResponse } from "@/app/types";
import { TOUR_DATA } from "@/constant";
import { fetcher } from "@/lib/fetcher";

const BASE_URL = "/api/tours";

export const TourService = {
  getPopular: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<ITour>>(BASE_URL + "/list", {
      method: "get",
      params,
      mockData: {
        code: 1000,
        message: "Thành công!",
        content: TOUR_DATA.slice(0, 3),
        page: 0,
        size: 2,
        totalElements: 13,
        totalPages: 7,
      },
    }),
  getAll: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<ITour>>(BASE_URL + "/list", {
      method: "get",
      params,
      cache: "no-cache",
      mockData: {
        code: 1000,
        message: "Thành công!",
        content: TOUR_DATA,
        page: params.page,
        size: params.size,
        totalElements: 13,
        totalPages: 2,
      },
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
