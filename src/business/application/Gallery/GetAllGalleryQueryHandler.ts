import APIClient from "infrastructure/api-client";
import { GetAllGallery, GetAllTraining } from "infrastructure/end-points";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import { GalleryResponse } from "common/entities/Gallery/GalleryResponse";
import GetAllGalleryQuery from "./GetAllGalleryQuery";


@requestHandler(GetAllGalleryQuery)
export class GetAllGalleryQueryHandler
  implements IRequestHandler<GetAllGalleryQuery, GalleryResponse[]> {

  handle(value: GetAllGalleryQuery): Promise<GalleryResponse[]> {
    const apiClient = new APIClient<null, GalleryResponse[]>(GetAllGallery, "galleryApiBaseUrl");
    return apiClient.getAll({});
  }
}