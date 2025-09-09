
import { useQuery } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import GetAllTrainingCategoriesQuery from "business/application/Education/Categories/GetAllTrainingCategoriesQuery";
import { useEffect } from "react";


const mediator = new Mediator();

const useGetAllTrainingCategories = () => {
  const query = useQuery({
    queryKey: ['GetAllTrainingCategories'],
    queryFn: () => mediator.send<TrainingCategoriesListResponse[]>(new GetAllTrainingCategoriesQuery()),
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
export default useGetAllTrainingCategories;