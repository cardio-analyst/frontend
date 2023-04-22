import cn from 'classnames';
import React from 'react';
import { HelpBlockProps } from './types';

export const HelpBlock: React.FC<HelpBlockProps> = ({ content, isSubtitle = false }) => (
  <>
    <p className={isSubtitle ? 'help-subtitle' : 'help-title'}>{content.name}</p>
    <p className='help-description'>{content.description}</p>
    {content.calculation && (
      <div className='help-content-container'>
        <div className='help-content-container-label'>Расчёт</div>
        <div className='help-content-container-value'>
          <p className='help-calculator'>{content.calculation}</p>
        </div>
      </div>
    )}
    {(content.colors || content.colorsDescription) && (
      <div className='help-content-container'>
        <div className='help-content-container-label'>Маркировка</div>
        <div className='help-content-container-value'>
          {content.colorsDescription && (
            <div className='help-colors-description'>{content.colorsDescription}</div>
          )}
          <div className='help-wrap-colors'>
            {content.colors?.map((item) => (
              <div className='help-colors' key={item.id}>
                <div className={cn('help-colors-color', item.type)}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
);
