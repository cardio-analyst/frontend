import { User, UserDTO } from 'model/User';
import { apiPrivate } from 'http/api';

export class Api {
    public static async getInfo(): Promise<User | undefined> {
        const data = await apiPrivate.get<UserDTO>('/profile/info');

        if (data) {
            return new User(data);
        }

        return undefined;
    }
}
