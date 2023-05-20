import {RegionStatisticDTO, RegionStatistic} from '../model/RegionStatistic';
import {DiseaseStatisticDTO, DiseaseStatistic} from '../model/DiseaseStatistic';
import {SbpStatisticDTO, SbpStatistic} from '../model/SbpStatistic';
import {CardioStatisticDTO, CardioStatistic} from '../model/CardioStatistic';

export interface GetStatisticAllResponse {
    usersByRegions: RegionStatisticDTO[] | null;
    diseasesByUsers: DiseaseStatisticDTO[] | null;
    sbpByUsers: SbpStatisticDTO[] | null;
    cardiovascularAgesRangesByUsers: CardioStatisticDTO[];
}

export interface StatisticAllResponse {
    usersByRegions: RegionStatistic[] | null;
    diseasesByUsers: DiseaseStatistic[] | null;
    sbpByUsers: SbpStatistic[] | null;
    cardiovascularAgesRangesByUsers: CardioStatistic[] | null;
}
