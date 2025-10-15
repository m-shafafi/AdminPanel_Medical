import { IRequest } from "@Mediatr/index";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";
import { ProductRequest } from "common/entities/Product/ProductRequest";

export default class SetProductCommand implements IRequest<ProductListResponse> {

  constructor(public payload: ProductRequest) { }

}
