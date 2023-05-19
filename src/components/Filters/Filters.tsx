import React, { useState } from 'react';
import { Button, Collapse, DatePicker, Typography } from 'antd';
import clsx from 'clsx';
import styles from '../../modules/UsersData/components/UsersFilters/UsersFilters.module.scss';
import { SelectRegion } from '../SelectRegion/SelectRegion';
import { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';

const { RangePicker } = DatePicker;
const { Title } = Typography;
const { Panel } = Collapse;

interface Params {
    region?: string;
    birthDateFrom?: string;
    birthDateTo?: string;
}

interface FiltersProps {
    wrapperClassName?: string;
    isSelectRegion?: boolean;
    isBirthDay?: boolean;
    isLoading?: boolean;
    onApply: (params: Params) => void;
}

const birthDayFormat = 'DD.MM.YYYY';

export const Filters: React.FC<FiltersProps> = ({
    wrapperClassName,
    onApply,
    isSelectRegion = true,
    isLoading,
    isBirthDay = true,
}) => {
    const [region, setRegion] = useState<string | undefined>(undefined);
    const [birthDateFrom, setBirthDateFrom] = useState<string | undefined>(
        undefined,
    );
    const [birthDateTo, setBirthDateTo] = useState<string | undefined>(
        undefined,
    );

    return (
        <Collapse className={clsx(styles.container, wrapperClassName)} ghost>
            <Panel header={<Title level={4}>Фильтры</Title>} key='1'>
                <div className={styles.filters}>
                    {isSelectRegion && (
                        <div className={styles.filter}>
                            <Title level={5}>Регионы</Title>
                            <SelectRegion
                                defaultValue={{
                                    value: '',
                                    label: 'Все регионы',
                                }}
                                value={region}
                                onChange={setRegion}
                                wrapperClassname={styles.regions}
                            />
                        </div>
                    )}
                    {isBirthDay && (
                        <div className={styles.filter}>
                            <Title level={5}>Дата рождения</Title>
                            <RangePicker
                                placeholder={['От', 'До']}
                                onChange={handleDates}
                            />
                        </div>
                    )}
                </div>
                <div className={styles.applyBlock}>
                    <Button
                        type='primary'
                        loading={isLoading}
                        onClick={handleOnApply}
                    >
                        Применить
                    </Button>
                </div>
            </Panel>
        </Collapse>
    );

    function handleDates(dates: RangeValue<Dayjs>) {
        if (dates) {
            const birthDateFromInit = dates[0]?.format(birthDayFormat);
            const birthDateToInit = dates[1]?.format(birthDayFormat);

            setBirthDateTo(birthDateToInit);
            setBirthDateFrom(birthDateFromInit);
        } else {
            if (birthDateTo) {
                setBirthDateTo(undefined);
            }
            if (birthDateFrom) {
                setBirthDateFrom(undefined);
            }
        }
    }

    function handleOnApply() {
        onApply({ region, birthDateFrom, birthDateTo });
    }
};
