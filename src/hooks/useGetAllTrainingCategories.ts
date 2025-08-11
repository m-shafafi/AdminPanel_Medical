
import { useQuery } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import  ProductListResponse  from "../common/entities/Product/ProductListResponse";
import ms from "ms";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";
import GetAllTrainingCategoriesQuery from "business/application/Education/Categories/GetAllTrainingCategoriesQuery";


const mediator = new Mediator();

 const useGetAllTrainingCategories=()=> {
 return  useQuery({
        queryKey: ['GetAllTrainingCategories'],
        queryFn: () => mediator.send< TrainingCategoriesListResponse[]>(new GetAllTrainingCategoriesQuery()),
        staleTime: ms('30m'),
        onSuccess:(data)=> {  console.log("ddd" ,data)  },
        onError: ( variables ) => {console.log("hooks error" ,variables)   },
        retry: false
    });

}
export default useGetAllTrainingCategories;