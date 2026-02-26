import { IDestination } from "@/app/services/destinations/type";
import { BaseResponse, CommonSearch, IID, PageResponse } from "@/app/types";
import { DESTINATION_DATA } from "@/constant";
import { fetcher } from "@/lib/fetcher";

const BASE_URL = "/api/destinations";

export const DestinationService = {
  getPopular: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<IDestination>>(BASE_URL + "/list", {
      method: "get",
      params,
      // next: { revalidate: 3000 },
      mockData: {
        code: 1000,
        message: "Thành công!",
        content: DESTINATION_DATA.slice(0, 4),
        page: 0,
        size: 2,
        totalElements: 13,
        totalPages: 7,
      },
    }),
  getAll: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<IDestination>>(BASE_URL + "/list", {
      method: "get",
      params,
      cache: "no-cache",
      mockData: {
        code: 1000,
        message: "Thành công!",
        content: DESTINATION_DATA,
        page: params.page,
        size: params.size,
        totalElements: 13,
        totalPages: 2,
      },
    }),

  getById: (id: number) =>
    fetcher<BaseResponse<IDestination>>(`${BASE_URL}/${id}`, {
      method: "get",
      mockData: {
        code: 1000,
        message: "Thành công",
        data: DESTINATION_DATA.find((item) => item?.id === id),
      },
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
