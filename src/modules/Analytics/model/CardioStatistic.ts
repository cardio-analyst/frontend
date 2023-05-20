export interface CardioStatisticDTO {
    range: string;
    value: number;

}

export class CardioStatistic {
    range: string;

    value: number;

    constructor(dto: CardioStatisticDTO) {
        this.range = dto.range;
        this.value = dto.value;
    }
}
