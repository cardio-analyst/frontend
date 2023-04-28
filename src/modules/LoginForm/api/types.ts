export interface SignInCreatorProps {
    loginOrEmail: string;
    password: string;
    onSuccess: () => void;
}

export interface SignInRequest {
    loginOrEmail: string;
    password: string;
}

export interface TokenResponse {
    accessToken: string;
    refreshToken: string;
}
