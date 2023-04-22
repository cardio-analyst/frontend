import { AxiosInstance } from 'axios';
import { IApiClient, RequestConfig } from './config/types';
import { axiosPublic } from './config/axiosPublic';
import { axiosPrivate } from './config/authPrivate';

class ApiClient implements IApiClient {
    private client: AxiosInstance;

    constructor(apiConfiguration: AxiosInstance) {
        this.client = apiConfiguration;
    }

    async post<TRequest, TResponse>(
        path: string,
        payload: TRequest,
        config?: RequestConfig,
    ): Promise<TResponse> {
        try {
            const response = config
                ? await this.client.post<TResponse>(path, payload, config)
                : await this.client.post<TResponse>(path, payload);
            return response.data;
        } catch (error) {
            // handleServiceError(error);
        }
        return {} as TResponse;
    }

    async patch<TRequest, TResponse>(
        path: string,
        payload: TRequest,
    ): Promise<TResponse> {
        try {
            const response = await this.client.patch<TResponse>(path, payload);
            return response.data;
        } catch (error) {
            // handleServiceError(error);
        }
        return {} as TResponse;
    }

    async put<TRequest, TResponse>(
        path: string,
        payload: TRequest,
    ): Promise<TResponse> {
        try {
            const response = await this.client.put<TResponse>(path, payload);
            return response.data;
        } catch (error) {
            // handleServiceError(error);
        }
        return {} as TResponse;
    }

    async get<TResponse>(path: string): Promise<TResponse> {
        try {
            const response = await this.client.get<TResponse>(path);
            return response.data;
        } catch (error) {
            // handleServiceError(error);
        }
        return {} as TResponse;
    }
}

export const apiPublic = new ApiClient(axiosPublic);
export const apiPrivate = new ApiClient(axiosPrivate);
