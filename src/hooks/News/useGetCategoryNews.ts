
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import { useEffect } from "react";
import GetAllNewsCategoryQuery from "business/application/News/NewsComments/Query/GetCategury/GetAllNewsCategoryQuery";
import NewsCategoryResponse from "common/entities/News/NewsCategoryResponse";


const mediator = new Mediator();

const useGetCategoryNews = () => {
    const query = useQuery({
        queryKey: ['GetAllCategoryNewsComment'],
        queryFn: () =>
            mediator.send<NewsCategoryResponse[]>(
                new GetAllNewsCategoryQuery()
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

export default useGetCategoryNews;
