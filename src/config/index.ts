import axios from "axios";
import apiEndpoints from "./api-endpoints";

export const useApi = () => {
  const api = () => {
    const headers = {
      "Content-Type": "application/json",
      "request-from": "web",
    };

    const apiConfig = axios.create({
      baseURL: "https://api.unsplash.com/photos/?client_id=fa5Y6OZU9comBaFRB4RpokFp6cSF-H_Tm1SAyUsn2",
      headers,
    });

    apiConfig.interceptors.request.use(async (config) => {
      return config;
    });

    apiConfig.interceptors.response.use(
      (res) => res,
      (error) => {
        throw error;
      }
    );

    return apiConfig;
  };

  return { api, apiEndpoints };
};
