import APIClient from "infrastructure/api-client";
import { GetListCategory } from "infrastructure/end-points";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import GetAllNewsCategoryQuery from "./GetAllNewsCategoryQuery";
import NewsCategoryResponse from "common/entities/News/NewsCategoryResponse";


@requestHandler(GetAllNewsCategoryQuery)
export class GetAllNewsCategoryQueryHandler
  implements IRequestHandler<GetAllNewsCategoryQuery, NewsCategoryResponse[]> {
  handle(value: GetAllNewsCategoryQuery): Promise<NewsCategoryResponse[]> {
    const apiClient = new APIClient<null, NewsCategoryResponse[]>(GetListCategory, "newsApiBaseUrl");
    return apiClient.getAll({});
  }
}