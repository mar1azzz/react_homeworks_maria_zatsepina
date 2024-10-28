/* eslint-disable react/prop-types */
import './Button.css';

const Button = ({ buttonName, onClickHandler, isSelected }) => {
    return (
        <button
            className={`button-with-phrase ${isSelected ? 'clicked' : ''}`}
            onClick={onClickHandler}
        >
            {buttonName}
        </button>
    );
};

export default Button;
