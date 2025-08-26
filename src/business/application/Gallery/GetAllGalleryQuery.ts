import { IRequest } from "@Mediatr/index";
import TrainingListResponse from "common/entities/Education/TrainingListResponse";
import { GalleryResponse } from "common/entities/Gallery/GalleryResponse";

export default class GetAllGalleryQuery implements IRequest<GalleryResponse[]> {
  language: string;

  constructor(language: string) {
    this.language = language;
  }
}