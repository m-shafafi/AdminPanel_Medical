
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import GetAllProductQuery from "business/application/Product/GetAllProductQuery";
import TrainingListResponse from "common/entities/Education/TrainingListResponse";
import { GetAllTraining } from "infrastructure/end-points";
import GetAllTrainingQuery from "business/application/Education/GetAllTrainingQuery";


const mediator = new Mediator();

 const useGetAllTraining = (language: string) => {
  return useQuery({
    queryKey: ['GetAllTraining', language],
    queryFn: () =>
      mediator.send<TrainingListResponse[]>(
        new GetAllTrainingQuery(language)
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

export default useGetAllTraining;
