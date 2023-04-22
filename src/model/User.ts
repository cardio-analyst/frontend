export interface UserDTO {
    id: number;
    firstName: string;
    lastName: string;
    region: string;
    login: string;
    email: string;
}

export class User {
    id: number;

    firstName: string;

    lastName: string;

    region: string;

    login: string;

    email: string;


    constructor(dto: UserDTO) {
        this.id = dto.id;
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
        this.region = dto.region;
        this.login = dto.login;
        this.email = dto.email;
    }
}
