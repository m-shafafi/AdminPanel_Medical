
import APIClient from "infrastructure/api-client";
import {   GetAllTrainingCategories } from "infrastructure/end-points";
import { IRequestHandler, requestHandler } from "@Mediatr/index";
import GetAllTrainingCategoriesQuery from "./GetAllTrainingCategoriesQuery";
import TrainingCategoriesListResponse from "common/entities/Education/TrainingCategoriesListResponse";


@requestHandler(GetAllTrainingCategoriesQuery)
export class GetAllTrainingCategoriesQueryHandler
  implements IRequestHandler<GetAllTrainingCategoriesQuery, TrainingCategoriesListResponse[]>
{
  handle(value: GetAllTrainingCategoriesQuery): Promise<TrainingCategoriesListResponse[]> {
    const apiClient = new APIClient<null, TrainingCategoriesListResponse[]>(GetAllTrainingCategories,"educationApiBaseUrl");
    console.log(apiClient.getAll({}))
    return apiClient.getAll({});
  }
}