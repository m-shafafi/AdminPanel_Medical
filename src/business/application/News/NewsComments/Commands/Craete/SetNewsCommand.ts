import { IRequest } from "@Mediatr/index";
import NewsCommentsRequest from "common/entities/News/NewsCommentsRequest";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";


export default class SetNewsCommand implements IRequest<NewsCommentsResponse> {

  constructor(public payload: NewsCommentsRequest) { }

}
