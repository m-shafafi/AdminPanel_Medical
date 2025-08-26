type ServiceKey = "productsApiBaseUrl" | "educationApiBaseUrl" | "newsApiBaseUrl" | "galleryApiBaseUrl";

class ApiConfigSingleton {
  private static instance: ApiConfigSingleton;

  private serviceUrls: Record<ServiceKey, string>;

  private constructor(serviceUrls: Record<ServiceKey, string>) {
    this.serviceUrls = serviceUrls;
  }

  public static initiateApiConfig(serviceUrls: Record<ServiceKey, string>) {
    if (!ApiConfigSingleton.instance) {
      ApiConfigSingleton.instance = new ApiConfigSingleton(serviceUrls);
    }
  }

  public static getApiConfig(serviceKey: ServiceKey): { baseUrl: string } {
    if (!ApiConfigSingleton.instance) {
      throw new Error("API Config not initialized");
    }

    const baseUrl = ApiConfigSingleton.instance.serviceUrls[serviceKey];

    if (!baseUrl) {
      throw new Error(`Base URL not defined for: ${serviceKey}`);
    }

    return { baseUrl };
  }
}

export default ApiConfigSingleton;
