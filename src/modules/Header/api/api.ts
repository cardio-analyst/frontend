import { Profile, ProfileDTO } from '../model/profile';
import { apiPrivate } from 'http/api';

export class Api {
    public static async getInfo(): Promise<Profile | undefined> {
        const data = await apiPrivate.get<ProfileDTO>('/profile/info');

        if (data) {
            return new Profile(data);
        }

        return undefined;
    }
}
