import APIClient from "infrastructure/api-client";
import { GetAllCategoryProduct } from "infrastructure/end-points";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import GetAllCategoryProductQuery from "./GetAllCategoryProductQuery";


@requestHandler(GetAllCategoryProductQuery)
export class GetAllCategoryProductQueryHandler
  implements IRequestHandler<GetAllCategoryProductQuery, CategoryProductListResponse[]>
{
  handle(value: GetAllCategoryProductQuery): Promise<CategoryProductListResponse[]> {
    const apiClient = new APIClient<null, CategoryProductListResponse[]>(GetAllCategoryProduct,"productsApiBaseUrl");
    return apiClient.getAll();
  }
}