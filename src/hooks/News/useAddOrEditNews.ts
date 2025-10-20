
import { useMutation } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import { ErrorType } from "common/entities/ErrorType";
import NewsCommentsRequest from "common/entities/News/NewsCommentsRequest";
import SetNewsCommand from "business/application/News/NewsComments/Commands/Craete/SetNewsCommand";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";


const mediator = new Mediator();

const useAddOrEditNews = () => {
    return useMutation<NewsCommentsResponse, ErrorType<NewsCommentsRequest>, SetNewsCommand>({
        mutationFn: (data: SetNewsCommand) => mediator.send<NewsCommentsResponse>(data),
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
export default useAddOrEditNews;
