export interface ReviewDTO {
    firstName: string,
    lastName: string,
    middleName: string,
    login: string,
    email: string,
    mark: number,
    message: string,
}

export class Review {
    firstName: string

    lastName: string

    middleName: string

    login: string

    email: string

    mark: number

    message: string

    constructor(dto: ReviewDTO) {
        this.firstName = dto.firstName;
        this.lastName = dto.lastName;
        this.middleName = dto.middleName;
        this.login = dto.login;
        this.email = dto.email;
        this.mark = dto.mark;
        this.message = dto.message;
    }
}
