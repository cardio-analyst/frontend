import { User } from '../../../model/User';
import { GetUsersResponse } from './types';
import { apiPrivate } from 'http/api';

export default class UserService {
    public static async getAll(): Promise<User[] | undefined> {
        const data = await apiPrivate.get<GetUsersResponse>('/user');

        if (data) {
            return data.users.map((item) => new User(item));
        }

        return undefined;
    }
}
