import { SendMessageRequest } from "common/entities/Contact/SendMessageRequest";
import SendMessageResponse from "common/entities/Contact/SendMessageResponse";
import SetContactCommand from "./SetContactCommand";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import { addContact } from "infrastructure/end-points";
import APIClient from "infrastructure/api-client";

@requestHandler(SetContactCommand)
export class SetContactCommandHandler
  implements IRequestHandler<SetContactCommand, SendMessageResponse>
{
  async handle(value: SetContactCommand): Promise<SendMessageResponse> {
    const apiClient = new APIClient<SendMessageRequest, SendMessageResponse>(
      addContact,
      "contactApiBaseUrl"
    );

    const payload: SendMessageRequest = {
      Name: value.Name,
      Email: value.Email,
      Subject: value.Subject,
      Message: value.Message,
      IsRead: true,
      CategoryId: 1,
      Phone: value.Phone
    };

    try {
      const response = await apiClient.post(payload);
      return response;
    } catch (error) {
      console.error("Error sending contact message:", error);
      throw error;
    }
  }
}
