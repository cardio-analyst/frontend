import React, { useState } from 'react';

import { COMMON_TAB, SUMMARY_TAB, TEAM_TAB, disease, basicIndications, complexIndications } from '../constants/help';
import { refactorData } from 'utils/help';
import { HelpComponent } from './HelpComponent';

import { IHelpData } from './types';

export const HelpContainer = () => {
  const commonData = refactorData(disease);
  const summaryData = refactorData(basicIndications);
  const teamData = refactorData(complexIndications);

  const [activeTab, setActiveTab] = useState<string>(COMMON_TAB + commonData[0].name);
  const [activeBlock, setActiveBlock] = useState<IHelpData>(disease[0]);

  const setActiveTabForPage = (key: string) => {
    setActiveTab(key);

    if (key.includes(COMMON_TAB)) {
      key = key.replace(COMMON_TAB, '');
      return handleTabPage(key, disease);
    }

    if (key.includes(SUMMARY_TAB)) {
      key = key.replace(SUMMARY_TAB, '');
      return handleTabPage(key, basicIndications);
    }

    if (key.includes(TEAM_TAB)) {
      key = key.replace(TEAM_TAB, '');
      return handleTabPage(key, complexIndications);
    }
  };

  return (
    <HelpComponent
      common={commonData}
      summary={summaryData}
      team={teamData}
      activeTab={activeTab}
      setActiveTab={setActiveTabForPage}
      activeBlock={activeBlock}
    />
  );

  function handleTabPage(key: string, data: IHelpData[]) {
    const item = data.find((item) => item.name === key);
    if (item) {
      setActiveBlock(item);
    }
  }
};
