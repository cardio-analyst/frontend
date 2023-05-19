import { User } from 'model/User';
import { GetUsersResponse, UsersAllParams, UsersAllResponse } from './types';
import { apiPrivate } from 'http/api';

export class Api {
    public static async getUsersAll(
        params?: UsersAllParams,
    ): Promise<UsersAllResponse | undefined> {
        const data = await apiPrivate.get<GetUsersResponse>('/users', {
            params,
        });

        if (data) {
            const users = data.users.map((item) => new User(item));
            return {
                users,
                totalPages: data.totalPages,
            };
        }

        return undefined;
    }
}
