export interface SbpStatisticDTO {
    range: string;
    value: number;

}

export class SbpStatistic {
    range: string;

    value: number;

    constructor(dto: SbpStatisticDTO) {
        this.range = dto.range;
        this.value = dto.value;
    }
}
