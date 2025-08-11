import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axiosRetry from "axios-retry";



import i18n from "../i18n";
import { ErrorType } from "../common/entities/ErrorType";
import ApiConfigSingleton from "business/api-config-singleton.ts";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});
const axiosInstanceProfiles = axios.create({
  headers: {
    "Content-Type": "application/json",
    "application-name": "OperationAccount"
  }
});

axiosRetry(axiosInstance, {
  retries: 1,
  retryCondition: (error) => {
    return error.response?.status === 401;
  }
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["accept-language"] = i18n.language;
  return config;
});

axiosInstanceProfiles.interceptors.request.use((config) => {
  config.headers["accept-language"] = i18n.language;
  return config;
});




class APIClient<TBody, TResponse> {
  endpoint: string;
  constructor(endpoint: string, serviceKey: "productsApiBaseUrl" | "educationApiBaseUrl" | "newsApiBaseUrl") {
    const { baseUrl } = ApiConfigSingleton.getApiConfig(serviceKey);
    this.endpoint = baseUrl + endpoint;
  }

  // getAll = (config: AxiosRequestConfig) => {
  //   var result=axiosInstance.get<TResponse>(this.endpoint, config).then((res) => res.data);
  //   console.log({result})
  //   return result;
  // };
  getAll = (params?: Record<string, any>) => {
  return axiosInstance
    .get<TResponse>(this.endpoint, { params })
    .then((res) => res.data);
};


  get = (id: number | string) => {
    return axiosInstance.get<TResponse>(this.endpoint + "/" + id).then((res) => res.data);
  };



  post = (body: TBody) => {
    return axiosInstance
      .post<TResponse>(this.endpoint, body)
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        if (error.response?.status == 400 && error?.response?.data) {
          throw prepareErrorType(<ErrorType<TResponse>>error?.response?.data);
        }
        raiseInternalError(error.response?.status);
      });
  };
}
function raiseInternalError(status?: number, instance?: string): never {
  const errorData: ErrorType<object> = {
    type: "",
    title: "Internal Error",
    status: status || -1,
    detail: i18n.t("Internal Error").toString()
    //instance: instance
  };
  throw errorData;
}

function prepareErrorType<T>(error: ErrorType<T>) {
  if (!error.detail || error.detail.trim().length === 0) {
    error.detail = i18n.t("Internal Error");
  }
  return error;
}

export default APIClient;
