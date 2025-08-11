
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";
import GetAllNewsCommentsQuery from "business/application/News/NewsComments/GetAllNewsCommentsQuery";


const mediator = new Mediator();

 const useGetAllNewsComment = () => {
  return useQuery({
    queryKey: ['GetAllNewsComment'],
    queryFn: () =>
      mediator.send<NewsCommentsResponse[]>(
        new GetAllNewsCommentsQuery()
      ),
    staleTime: ms('30m'),
    onSuccess: (data) => {
      console.log("ddd");
    },
    onError: (error) => {
      console.log("hooks error", error);
    },
    retry: false
  });
};

export default useGetAllNewsComment;
