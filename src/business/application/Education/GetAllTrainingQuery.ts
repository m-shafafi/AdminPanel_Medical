import { IRequest } from "@Mediatr/index";
import TrainingListResponse from "common/entities/Education/TrainingListResponse";

export default class GetAllTrainingQuery implements IRequest<TrainingListResponse[]> {
     language: string;

  constructor(language: string) {
    this.language = language;
  }
}