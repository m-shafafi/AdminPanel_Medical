import { axiosInstance } from "../axios";

export function getTestData() {
  return axiosInstance.get("/posts");
}
