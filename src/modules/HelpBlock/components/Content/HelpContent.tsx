import React from 'react';

import './style.scss';
import { HelpBlock } from './HelpBlock';
import { HelpContentProps } from './types';

export const HelpContent: React.FC<HelpContentProps> = ({ content }) => {
  if (content.paragraphs) {
    return (
      <div>
        <p className='help-title'>{content.name}</p>
        {content.description && <p className='help-description'>{content.description}</p>}
        {content.paragraphs.map((item, index) => (
          <div key={item.name + index}>
            <HelpBlock content={item} isSubtitle />
            {!!(content.paragraphs && content.paragraphs.length - 1 !== index) && <div className='help-divider' />}
          </div>
        ))}
      </div>
    );
  }
  return (
      <HelpBlock content={content} />
  );
};
