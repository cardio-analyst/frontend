import axios from 'axios';
import { baseApiUrl } from '../constants/api';

export const axiosPublic = axios.create({
    baseURL: baseApiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});
