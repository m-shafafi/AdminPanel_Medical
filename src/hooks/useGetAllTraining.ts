
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import GetAllProductQuery from "business/application/Product/GetAllProductQuery";
import TrainingListResponse from "common/entities/Education/TrainingListResponse";
import { GetAllTraining } from "infrastructure/end-points";
import GetAllTrainingQuery from "business/application/Education/GetAllTrainingQuery";
import { useEffect } from "react";


const mediator = new Mediator();

 const useGetAllTraining = (language: string) => {
   const query = useQuery({
    queryKey: ['GetAllTraining', language],
    queryFn: () =>
      mediator.send<TrainingListResponse[]>(
        new GetAllTrainingQuery(language)
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

 

export default useGetAllTraining;
