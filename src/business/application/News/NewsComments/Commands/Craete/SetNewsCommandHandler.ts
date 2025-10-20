import { IRequestHandler, requestHandler } from "@Mediatr/index";
import { addContact } from "infrastructure/end-points";
import APIClient from "infrastructure/api-client";
import { toShamsiString } from "common/entities/toShamsiString";
import SetNewsCommand from "./SetNewsCommand";
import NewsCommentsRequest from "common/entities/News/NewsCommentsRequest";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";

@requestHandler(SetNewsCommand)
export class SetNewsCommandHandler
  implements IRequestHandler<SetNewsCommand, NewsCommentsResponse> {
  async handle(value: SetNewsCommand): Promise<NewsCommentsResponse> {
    const apiClient = new APIClient<NewsCommentsRequest, NewsCommentsResponse>(
      addContact,
      "productsApiBaseUrl"
    );

    const payload: NewsCommentsRequest = {
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
