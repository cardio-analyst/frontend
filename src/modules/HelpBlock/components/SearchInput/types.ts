export type Option = { key: string; value: string };

export interface SearchInputProps {
  setActiveTab: (value: string) => void;
  setOpenKeys: (value: string[]) => void;
}
