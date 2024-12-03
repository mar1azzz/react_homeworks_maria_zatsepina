/* eslint-disable react/prop-types */
import './Button.css';

const Button = ({ buttonName, onClickHandler, isSelected, isInverted }) => (
  <button
    className={`button-with-phrase ${isSelected ? 'clicked' : ''} ${isInverted ? 'inverted' : ''}`}
    onClick={onClickHandler}
  >
    {buttonName}
  </button>
);
export default Button;
