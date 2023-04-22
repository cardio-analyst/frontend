export interface IHelpData {
    name: string;
    description?: string;
    calculation?: string;
    colorsDescription?: string;
    colors?: IColor[] | null;
    paragraphs?: IHelpData[];
}

interface IColor {
    id: number;
    label: string;
    color: 'желтый' | 'красный' | 'зеленый' | 'синий' | '-';
    type: 'warning' | 'danger' | 'success' | 'blue' | 'default';
}

export interface HelpComponentProps extends HelpDefaultProps {
    activeBlock: IHelpData;
}

export interface HelpDefaultProps {
    common: Data[];
    summary: Data[];
    team: Data[];
    activeTab: string;
    setActiveTab: (value: string) => void;
}

interface Data {
    name: string;
}
