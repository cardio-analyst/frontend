import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatisticAllResponse } from '../api/types';
import { RegionStatistic } from '../model/RegionStatistic';
import { DiseaseStatistic } from '../model/DiseaseStatistic';
import { SbpStatistic } from '../model/SbpStatistic';
import { CardioStatistic } from '../model/CardioStatistic';
import { fetchAnalytics } from './analyticsCreators';

interface InitialStateAnalytics {
    isLoading: boolean;
    usersByRegions: RegionStatistic[] | null;
    diseasesByUsers: DiseaseStatistic[] | null;
    sbpByUsers: SbpStatistic[] | null;
    cardiovascularAgesRangesByUsers: CardioStatistic[] | null;
}

const initialState: InitialStateAnalytics = {
    isLoading: false,
    usersByRegions: null,
    diseasesByUsers: null,
    sbpByUsers: null,
    cardiovascularAgesRangesByUsers: null,
};

export const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        fetchCompleted: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: {
        [fetchAnalytics.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchAnalytics.fulfilled.type]: (
            state,
            action: PayloadAction<StatisticAllResponse>,
        ) => {
            const {
                diseasesByUsers,
                sbpByUsers,
                usersByRegions,
                cardiovascularAgesRangesByUsers,
            } = action.payload;
            state.usersByRegions = usersByRegions;
            state.diseasesByUsers = diseasesByUsers;
            state.sbpByUsers = sbpByUsers;
            state.cardiovascularAgesRangesByUsers =
                cardiovascularAgesRangesByUsers;
        },
    },
});
