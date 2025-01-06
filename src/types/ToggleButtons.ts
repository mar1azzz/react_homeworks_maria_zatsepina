export interface ButtonData {
  id: string;
  label: string;
}

export interface ToggleButtonsProps {
  filterByCategory: (category: string) => void;
  categories: string[];
}
