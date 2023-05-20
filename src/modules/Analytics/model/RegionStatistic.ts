export interface RegionStatisticDTO {
    region: string;
    value: number;

}

export class RegionStatistic {
    region: string;

    value: number;

    constructor(dto: RegionStatisticDTO) {
        this.region = dto.region;
        this.value = dto.value;
    }
}
