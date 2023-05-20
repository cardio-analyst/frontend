export interface DiseaseStatisticDTO {
    disease: string;
    value: number;

}

export class DiseaseStatistic {
    disease: string;

    value: number;

    constructor(dto: DiseaseStatisticDTO) {
        this.disease = dto.disease;
        this.value = dto.value;
    }
}
