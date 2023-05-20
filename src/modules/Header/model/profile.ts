export interface ProfileDTO {
    firstName: string;
    lastName: string;
    region: string;
    login: string;
    email: string;
}

export class Profile {
    firstName: string;

    lastName: string;

    region: string;

    login: string;

    email: string;


    constructor(dto: ProfileDTO) {
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
        this.region = dto.region;
        this.login = dto.login;
        this.email = dto.email;
    }
}
