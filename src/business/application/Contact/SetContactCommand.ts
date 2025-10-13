import { IRequest } from '@Mediatr/index';
import SendMessageResponse from 'common/entities/Contact/SendMessageResponse';

export default class SetContactCommand implements IRequest<SendMessageResponse> {

    Name: string;
    Email: string;
    Subject: string;
    Message: string;
    IsRead: boolean;
    CategoryId: number;
    Phone: string;

    constructor(formData: SetContactCommand) {
        console.log({ formData })
        this.Name = formData?.Name;
        this.Email = formData?.Email;
        this.Subject = formData?.Subject;
        this.Message = formData?.Message;
        this.IsRead = formData?.IsRead;
        this.CategoryId = formData?.CategoryId;
        this.Phone = formData?.Phone;
        console.log(this)
    }

}
