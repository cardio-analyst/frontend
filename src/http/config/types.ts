export enum ErrorEnum {
    AccessTokenExpired = 'AccessTokenExpired',
    RefreshTokenExpired = 'RefreshTokenExpired',
    WrongRefreshToken = 'WrongRefreshToken',
    PNotAllowed = 'IPNotAllowed',
}

export interface ErrorApp {
    error: ErrorEnum
    description: string
}

export type HttpHeaders = {
    [key: string]: string;
};

export type RequestConfig = {
    headers: HttpHeaders;
};

export interface IApiClient {
    post<TRequest, TResponse>(
        path: string,
        object: TRequest,
        config?: RequestConfig
    ): Promise<TResponse>;
    patch<TRequest, TResponse>(
        path: string,
        object: TRequest
    ): Promise<TResponse>;
    put<TRequest, TResponse>(path: string, object: TRequest): Promise<TResponse>;
    get<TResponse>(path: string): Promise<TResponse>;
}

export interface TokenResponse {
    accessToken: string;
    refreshToken: string;
}
