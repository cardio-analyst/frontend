import mem from 'mem';

import { axiosPublic } from './axiosPublic';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';
import { TokenResponse } from 'modules/LoginForm';

const refreshTokenFn = async () => {
    const refreshToken = getCookie('refreshToken');

    try {
        const response = await axiosPublic.post<TokenResponse>(
            '/auth/refreshTokens',
            { refreshToken },
        );

        const data = response.data;

        setCookie('accessToken', data.accessToken);
        setCookie('refreshToken', data.refreshToken);
        return data;
    } catch (error) {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
    }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
    maxAge,
});
