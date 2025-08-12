
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import  ProductListResponse  from "../common/entities/Product/ProductListResponse";
import ms from "ms";
import GetAllProductQuery from "business/application/Product/GetAllProductQuery";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import GetAllCategoryProductQuery from "business/application/Product/Category/GetAllCategoryProductQuery";


const mediator = new Mediator();

 const useGetAllCatalogs=()=> {
 return  useQuery({
        queryKey: ['GetAllCatalog'],
        queryFn: () => mediator.send<CategoryProductListResponse[]>(new GetAllCategoryProductQuery()),
        staleTime: ms('30m'),
        onSuccess:(data)=> {  console.log("ddd" ,data)  },
        onError: ( variables ) => {console.log("hooks error" ,variables)   },
        retry: false
    });

}
export default useGetAllCatalogs;
