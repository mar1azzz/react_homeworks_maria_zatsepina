import './ButtonsWithPhrases.css';

// eslint-disable-next-line react/prop-types
const ButtonsWithPhrases = ({buttonName}) => {
    const handleClick = () => {
        alert(buttonName);
    }
    return(
        <button className = 'button-with-phrase' onClick={handleClick}>
            {buttonName}
        </button>
    );
};

export default ButtonsWithPhrases;