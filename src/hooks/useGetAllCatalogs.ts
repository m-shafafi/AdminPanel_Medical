
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import CategoryProductListResponse from "common/entities/Product/CategoryProductListResponse";
import GetAllCategoryProductQuery from "business/application/Product/Category/GetAllCategoryProductQuery";
import { useEffect } from "react";


const mediator = new Mediator();

 const useGetAllCatalogs=()=> {
  const query =  useQuery({
        queryKey: ['GetAllCatalog'],
        queryFn: () => mediator.send<CategoryProductListResponse[]>(new GetAllCategoryProductQuery()),
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
export default useGetAllCatalogs;
