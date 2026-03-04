import { ITour } from "@/app/services/tours/type";
import { BaseResponse, CommonSearch, PageResponse } from "@/app/types";
import { BLOG_DATA } from "@/constant";
import { fetcher } from "@/lib/fetcher";

const BASE_URL = "/api/blogs";

export const BlogService = {
  getPopular: (params: Partial<CommonSearch>) =>
    fetcher<PageResponse<ITour>>(BASE_URL + "/list", {
      method: "get",
      params,
      mockData: {
        code: 1000,
        message: "Thành công!",
        content: BLOG_DATA.slice(0, 3),
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
        content: BLOG_DATA,
        page: params.page,
        size: params.size,
        totalElements: 13,
        totalPages: 2,
      },
    }),

  getById: (id: number) =>
    fetcher<BaseResponse<ITour>>(`${BASE_URL}/${id}`, {
      method: "get",
      mockData: {
        code: 1000,
        message: "Thành công",
        data: BLOG_DATA.find((item) => item?.id === id),
      },
    }),
};
