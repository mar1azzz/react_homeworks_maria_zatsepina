export interface ButtonProps {
  buttonName: string;
  onClickHandler: () => void;
  isSelected?: boolean;
  isInverted?: boolean;
}