export interface FeedbackDTO {
    id: number;
    userId: number;
    userFirstName: string;
    userLastName: string;
    userMiddleName: string;
    userLogin: string;
    userEmail: string;
    mark: number;
    message: string;
    version: string;
    viewed: boolean;
    createdAt: string;
}

export class Feedback {
    id: number;

    userId: number;

    userFirstName: string;

    userLastName: string;

    userMiddleName: string;

    userLogin: string;

    userEmail: string;

    mark: number;

    message: string;

    version: string;

    viewed: boolean;

    createdAt: string;

    constructor(dto: FeedbackDTO) {
        this.id = dto.id;
        this.userId = dto.userId;
        this.userFirstName = dto.userFirstName;
        this.userLastName = dto.userLastName;
        this.userMiddleName = dto.userMiddleName;
        this.userLogin = dto.userLogin;
        this.userEmail = dto.userEmail;
        this.mark = dto.mark;
        this.message = dto.message;
        this.version = dto.version;
        this.viewed = dto.viewed;
        this.createdAt = dto.createdAt;
    }
}
