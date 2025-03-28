import './Button.css';
import { ButtonProps } from '../../types/Button';

const Button: React.FC<ButtonProps> = ({
  buttonName,
  onClickHandler,
  isSelected = false,
  isInverted = false,
}): JSX.Element => (
  <button
    className={`button-with-phrase ${isSelected ? 'clicked' : ''} ${isInverted ? 'inverted' : ''}`}
    onClick={onClickHandler}
  >
    {buttonName}
  </button>
);

export default Button;
