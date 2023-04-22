import { IHelpData } from '../types';

export interface HelpContentProps {
  content: IHelpData;
}

export interface HelpBlockProps {
  content: IHelpData;
  isSubtitle?: boolean;
}
