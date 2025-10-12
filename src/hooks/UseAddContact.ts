
import { useMutation } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";

import { SendMessageRequest } from "common/entities/Contact/SendMessageRequest";
import SendMessageResponse from "common/entities/Contact/SendMessageResponse";
import SetContactCommand from "business/application/Contact/SetContactCommand";
import { ErrorType } from "common/entities/ErrorType";


const mediator = new Mediator();

const UseAddContact = () => {
    return useMutation<SendMessageResponse, ErrorType<SendMessageRequest>, SetContactCommand>({
        mutationFn: (data: SetContactCommand) => mediator.send<SendMessageResponse>(new SetContactCommand(data)),
        onMutate: (variables) => {
            return () => variables;
        },
        onSuccess: (data, variables) => {
            return () => data;
        },
        onError: (error, variables) => {
            return () => variables;
        }
    });

}
export default UseAddContact;
