import { IRequest } from "@Mediatr/index";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";

export default class GetAllNewsCommentsQuery implements IRequest<NewsCommentsResponse[]> {}