import { HelpDefaultProps } from '../types';

export interface HelpTabsProps extends HelpDefaultProps {
  openKeys: string[];
  setOpenKeys: (value: string[]) => void;
}
