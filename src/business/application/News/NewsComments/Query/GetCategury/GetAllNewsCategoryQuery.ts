import { IRequest } from "@Mediatr/index";
import NewsCategoryResponse from "common/entities/News/NewsCategoryResponse";

export default class GetAllNewsCategoryQuery implements IRequest<NewsCategoryResponse[]> { }