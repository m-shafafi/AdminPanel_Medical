import { SendMessageRequest } from "common/entities/Contact/SendMessageRequest";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import { addContact } from "infrastructure/end-points";
import APIClient from "infrastructure/api-client";
import { toShamsiString } from "common/entities/toShamsiString";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";
import SetProductCommand from "./SetProductCommand";
import { ProductRequest } from "common/entities/Product/ProductRequest";

@requestHandler(SetProductCommand)
export class SetProductCommandHandler
  implements IRequestHandler<SetProductCommand, ProductListResponse> {
  async handle(value: SetProductCommand): Promise<ProductListResponse> {
    const apiClient = new APIClient<ProductRequest, ProductListResponse>(
      addContact,
      "productsApiBaseUrl"
    );

    const payload: ProductRequest = {
     ...value.payload,
      creationDateTimeShamsi: toShamsiString(new Date()),
      modificationDateTimeShamsi: toShamsiString(new Date()),
    };

    try {
      const response = await apiClient.post(payload);
      console.log({ response })
      return response;
    } catch (error) {
      console.error("Error sending contact message:", error);
      console.log({ error })
      throw error;
    }
  }
}
