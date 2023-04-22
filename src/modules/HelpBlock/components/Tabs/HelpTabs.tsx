import React from 'react';
import { Menu } from 'antd';

import { COMMON_TAB, SUMMARY_TAB, TEAM_TAB,basicIndicationsTitle,
    complexIndicationsTitle,
    diseaseTitle, } from '../../constants/help';

import '../style.scss';
import { HelpTabsProps } from './types';

const { SubMenu } = Menu;

export const HelpTabs: React.FC<HelpTabsProps> = ({
    activeTab,
    setActiveTab,
    openKeys,
    setOpenKeys,
    summary,
    common,
    team,
}) => {
    const onTitleClick = (key: string) => {
        const indexKey = openKeys.indexOf(key);
        if (indexKey !== -1) {
            return setOpenKeys(
                openKeys.filter((_, index) => index !== indexKey),
            );
        }
        return setOpenKeys([...openKeys, key]);
    };

    return (
        <Menu
            selectedKeys={[activeTab]}
            openKeys={openKeys}
            mode='inline'
            onClick={(e) => setActiveTab(e.key)}
        >
            <SubMenu
                key={COMMON_TAB}
                title={diseaseTitle}
                onTitleClick={() => onTitleClick(COMMON_TAB)}
            >
                {common.map((item) => (
                    <Menu.Item key={COMMON_TAB + item.name}>
                        {item.name}
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu
                key={SUMMARY_TAB}
                title={basicIndicationsTitle}
                onTitleClick={() => onTitleClick(SUMMARY_TAB)}
            >
                {summary.map((item) => (
                    <Menu.Item key={SUMMARY_TAB + item.name}>
                        {item.name}
                    </Menu.Item>
                ))}
            </SubMenu>
            <SubMenu
                key={TEAM_TAB}
                title={complexIndicationsTitle}
                onTitleClick={() => onTitleClick(TEAM_TAB)}
            >
                {team.map((item) => (
                    <Menu.Item key={TEAM_TAB + item.name}>
                        {item.name}
                    </Menu.Item>
                ))}
            </SubMenu>
        </Menu>
    );
};
