import APIClient from "infrastructure/api-client";
import { GetAllProduct } from "infrastructure/end-points";
import GetAllProductQuery from "./GetAllProductQuery";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import axios from "axios";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";


@requestHandler(GetAllProductQuery)
export class GetAllProductQueryHandler
  implements IRequestHandler<GetAllProductQuery, ProductListResponse[]>
{
  handle(value: GetAllProductQuery): Promise<ProductListResponse[]> {
    const apiClient = new APIClient<null, ProductListResponse[]>(GetAllProduct,"productsApiBaseUrl");
    return apiClient.getAll();
  }
}