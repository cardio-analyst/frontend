import React from 'react';
import { Descriptions } from 'antd';

interface DefaultDescriptionProps {
    children: React.ReactNode;
}

export const DefaultDescription: React.FC<DefaultDescriptionProps> = ({
    children,
}) => <Descriptions column={1}>{children}</Descriptions>;
