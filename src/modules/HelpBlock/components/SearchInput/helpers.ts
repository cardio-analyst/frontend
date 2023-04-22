import { Option } from './types';
import {
    disease,
    basicIndications,
    complexIndications,
    diseaseTitle,
    basicIndicationsTitle,
    complexIndicationsTitle,
    COMMON_TAB, SUMMARY_TAB, TEAM_TAB
} from '../../constants/help';
import { IHelpData } from '../types';

const searchInHelpArray = (
    items: IHelpData[],
    value: string,
    nameSection: string,
    keySection: string,
): Option[] =>
    items.reduce((acc, item) => {
        const customNameItem = `${nameSection} - ${item.name}`.toLowerCase();
        if (customNameItem.indexOf(value.toLowerCase()) != -1) {
            return acc.concat({
                key: `${keySection};${item.name}`,
                value: `${nameSection} - ${item.name}`,
            });
        }
        return acc;
    }, [] as Option[]);

export const getSearchValues = (value: string): Option[] => {
    if (!value) {
        return [];
    }

    const result: Option[] = [];

    result.push(...searchInHelpArray(disease, value, diseaseTitle, COMMON_TAB));
    result.push(
        ...searchInHelpArray(
            basicIndications,
            value,
            basicIndicationsTitle,
            SUMMARY_TAB,
        ),
    );
    result.push(
        ...searchInHelpArray(
            complexIndications,
            value,
            complexIndicationsTitle,
            TEAM_TAB,
        ),
    );

    return result;
};
