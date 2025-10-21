
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Mediator } from "@Mediatr/index";
import ms from "ms";
import { useEffect } from "react";
import { GalleryResponse } from "common/entities/Gallery/GalleryResponse";
import GetAllGalleryQuery from "business/application/Gallery/GetAllGalleryQuery";


const mediator = new Mediator();

const useGetAllGallery = (language: string) => {
  const query = useQuery({
    queryKey: ['useGetAllGallery', language],
    queryFn: () =>
      mediator.send<GalleryResponse[]>(
        new GetAllGalleryQuery(language)
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



export default useGetAllGallery;
