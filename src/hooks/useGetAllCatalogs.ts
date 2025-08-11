
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import  ProductListResponse  from "../common/entities/Product/ProductListResponse";
import ms from "ms";
import GetAllProductQuery from "business/application/Product/GetAllProductQuery";


const mediator = new Mediator();

 const useGetAllCatalogs=()=> {
 return  useQuery({
        queryKey: ['GetAllCatalog'],
        queryFn: () => mediator.send<ProductListResponse[]>(new GetAllProductQuery()),
        staleTime: ms('30m'),
        onSuccess:(data)=> {  console.log("ddd" ,data)  },
        onError: ( variables ) => {console.log("hooks error" ,variables)   },
        retry: false
    });

}
export default useGetAllCatalogs;
