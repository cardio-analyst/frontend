import axios from 'axios';

import { memoizedRefreshToken } from './refreshToken';
import { getCookie } from '../../utils/cookie';
import { ErrorEnum } from './types';
import { baseApiUrl } from '../constants/api';

axios.defaults.baseURL = baseApiUrl;

axios.interceptors.request.use(
    async (config) => {
        const accessToken = getCookie('accessToken');

        if (accessToken) {
            // @ts-ignore
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`,
            };
        }

        return config;
    },
    (error) => Promise.reject(error),
);

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const config = error?.config;

        if (
            error?.response?.data.error === ErrorEnum.AccessTokenExpired &&
            !config?.sent
        ) {
            config.sent = true;

            const result = await memoizedRefreshToken();

            if (result?.accessToken) {
                config.headers = {
                    ...config.headers,
                    authorization: `Bearer ${result?.accessToken}`,
                };
            }

            return axios(config);
        }
        return Promise.reject(error);
    },
);

export const axiosPrivate = axios;

