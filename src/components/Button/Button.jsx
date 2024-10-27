/* eslint-disable no-undef */
import './Button.css';

// eslint-disable-next-line react/prop-types
const Button = ({ buttonName, onClickHandler, inverted = false }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
        if (onClickHandler) {
            onClickHandler();
        }
    };

    const buttonClass = `button-with-phrase ${isClicked ? 'clicked' : ''} ${inverted ? 'inverted' : ''}`;

    return (
        <button className={buttonClass} onClick={handleClick}>
            {buttonName}
        </button>
    );
};

export default Button;