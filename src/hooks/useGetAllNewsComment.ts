
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import NewsCommentsResponse from "common/entities/News/NewsCommentsResponse";
import GetAllNewsCommentsQuery from "business/application/News/NewsComments/GetAllNewsCommentsQuery";
import { useEffect } from "react";


const mediator = new Mediator();

 const useGetAllNewsComment = () => {
   const query =useQuery({
    queryKey: ['GetAllNewsComment'],
    queryFn: () =>
      mediator.send<NewsCommentsResponse[]>(
        new GetAllNewsCommentsQuery()
      ),
    staleTime: ms('30m'),
    retry: false
  });
useEffect(() => {
    if (query.isSuccess) {
      console.log("ddd", query.data);
    }
  }, [query.isSuccess, query.data]);

useEffect(() => {
    if (query.isError) {
      console.log("hooks error", query.error);
    }
  }, [query.isError, query.error]);

  return query;

}

export default useGetAllNewsComment;
