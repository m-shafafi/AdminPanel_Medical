import APIClient from "infrastructure/api-client";
import { GetAllNewsComment, GetAllTraining } from "infrastructure/end-points";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";
import GetAllNewsCommentsQuery from "./GetAllNewsCommentsQuery";


@requestHandler(GetAllNewsCommentsQuery)
export class GetAllNewsCommentsQueryHandler
  implements IRequestHandler<GetAllNewsCommentsQuery, NewsCommentsResponse[]> {
  handle(value: GetAllNewsCommentsQuery): Promise<NewsCommentsResponse[]> {
    const apiClient = new APIClient<null, NewsCommentsResponse[]>(GetAllNewsComment, "newsApiBaseUrl");
    return apiClient.getAll({});
  }
}