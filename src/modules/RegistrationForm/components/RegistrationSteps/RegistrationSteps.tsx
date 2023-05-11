import React from 'react';
import { Steps } from 'antd';

interface RegisterStepsProps {
    currentStep: number;
    wrapperClassName?: string;
}

export const RegisterSteps: React.FC<RegisterStepsProps> = ({
    currentStep,
    wrapperClassName
}) => (
    <Steps
        direction='vertical'
        current={currentStep}
        className={wrapperClassName}
        items={[
            {
                title: 'Учётные данные',
                description: 'Заполните учётные данные',
            },
            {
                title: 'Персональные данные',
                description: 'Заполните персональные данные',
            },
            {
                title: 'Подверждение',
                description: 'Подтвердите учётную запись',
            },
        ]}
    />
);
