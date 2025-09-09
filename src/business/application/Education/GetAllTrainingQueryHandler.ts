import APIClient from "infrastructure/api-client";
import { GetAllTraining } from "infrastructure/end-points";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import axios from "axios";
import GetAllTrainingQuery from "./GetAllTrainingQuery";
import TrainingListResponse from "common/entities/Education/TrainingListResponse";


@requestHandler(GetAllTrainingQuery)
export class GetAllTrainingQueryHandler
  implements IRequestHandler<GetAllTrainingQuery, TrainingListResponse[]> {
  handle(value: GetAllTrainingQuery): Promise<TrainingListResponse[]> {
    const apiClient = new APIClient<null, TrainingListResponse[]>(GetAllTraining, "educationApiBaseUrl");
    return apiClient.getAll({});
  }
}