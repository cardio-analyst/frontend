export enum ErrorGlobalEnum {
    AccessTokenExpired = 'AccessTokenExpired',
    RefreshTokenExpired = 'RefreshTokenExpired',
    WrongRefreshToken = 'WrongRefreshToken',
    PNotAllowed = 'IPNotAllowed',
    InternalError = 'InternalError',
}

export interface ErrorApp<T = ErrorGlobalEnum> {
    error: T & ErrorGlobalEnum;
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
