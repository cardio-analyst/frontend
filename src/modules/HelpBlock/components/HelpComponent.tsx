import React, { useState } from 'react';

import { HelpTabs } from './Tabs/HelpTabs';
import { HelpContent } from './Content/HelpContent';

import './style.scss';
import { COMMON_TAB } from '../constants/help';
import SearchInput from './SearchInput';
import { HelpComponentProps } from './types';

export const HelpComponent: React.FC<HelpComponentProps> = ({
    common,
    summary,
    team,
    activeTab,
    setActiveTab,
    activeBlock,
}) => {
    const [openKeys, setOpenKeys] = useState<string[]>([COMMON_TAB]);

    return (
        <div>
            <SearchInput
                setActiveTab={setActiveTab}
                setOpenKeys={setOpenKeys}
            />
            <div className='common-table-container'>
                <div className='left-section'>
                    <HelpTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        openKeys={openKeys}
                        setOpenKeys={setOpenKeys}
                        common={common}
                        summary={summary}
                        team={team}
                    />
                </div>
                <div className='right-section'>
                    {activeBlock && <HelpContent content={activeBlock} />}
                </div>
            </div>
        </div>
    );
};
