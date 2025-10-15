
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import { useEffect } from "react";
import { ProductListResponse } from "common/entities/Product/ProductListResponse";
import GetAllProductQuery from "business/application/Product/Query/GetAllProductQuery";


const mediator = new Mediator();

 const useGetAllProduct=()=> {
  const query =  useQuery({
        queryKey: ['GetAllProduct'],
        queryFn: () => mediator.send<ProductListResponse[]>(new GetAllProductQuery()),
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
export default useGetAllProduct;
