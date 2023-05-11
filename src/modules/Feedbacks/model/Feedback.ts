export interface FeedbackDTO {
    userId: number,
    userFirstName: string,
    userLastName: string,
    userMiddleName: string,
    userLogin: string,
    userEmail: string,
    mark: number,
    message: string,
    createdAt: string;
}

export class Feedback {
    userFirstName: string;

    userLastName: string;

    userMiddleName: string;

    userLogin: string;

    userEmail: string;

    mark: number;

    message: string;

    createdAt: string;

    constructor(dto: FeedbackDTO) {
        this.userFirstName = dto.userFirstName;
        this.userLastName = dto.userLastName;
        this.userMiddleName = dto.userMiddleName;
        this.userLogin = dto.userLogin;
        this.userEmail = dto.userEmail;
        this.mark = dto.mark;
        this.message = dto.message;
        this.createdAt = dto.createdAt;
    }
}
