import { User, UserDTO } from 'model/User';

export interface GetUsersResponse {
    users: UserDTO[];
    totalPages?: number;
}

export interface UsersAllParams {
    birthDateFrom?: string;
    region?: string;
    birthDateTo?: string;
    limit?: number;
    page?: number;
}

export interface UsersAllResponse {
    users: User[];
    totalPages?: number;
}
