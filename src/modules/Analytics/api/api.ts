import { apiPrivate } from 'http/api';
import { GetStatisticAllResponse, StatisticAllResponse } from './types';
import { RegionStatistic } from '../model/RegionStatistic';
import { DiseaseStatistic } from '../model/DiseaseStatistic';
import { SbpStatistic } from '../model/SbpStatistic';
import { CardioStatistic } from '../model/CardioStatistic';

export class Api {
    public static async getStatisticsAll(
        region?: string,
    ): Promise<StatisticAllResponse | undefined> {
        const data = await apiPrivate.get<GetStatisticAllResponse>(
            '/statistics',
            {
                params: {
                    region,
                },
            },
        );

        if (data) {
            return {
                usersByRegions:
                    data.usersByRegions?.map(
                        (item) => new RegionStatistic(item),
                    ) || null,
                diseasesByUsers:
                    data.diseasesByUsers?.map(
                        (item) => new DiseaseStatistic(item),
                    ) || null,
                sbpByUsers:
                    data.sbpByUsers?.map((item) => new SbpStatistic(item)) ||
                    null,
                cardiovascularAgesRangesByUsers:
                    data.cardiovascularAgesRangesByUsers?.map(
                        (item) => new CardioStatistic(item),
                    ) || null,
            };
        }
        return undefined;
    }
}
