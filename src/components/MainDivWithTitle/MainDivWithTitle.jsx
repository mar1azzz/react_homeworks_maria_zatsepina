import './MainDivWithTitle.css';
import ButtonsWithPhrases from '../ButtonsWithPhrases/ButtonsWithPhrases';

function MainDivWithTitle() {
    const buttonPhrases = ['Allons-y!', 'Hello World!', 'ฅ^•ﻌ•^ฅ!'];

    return(
        <div className="main-div">
            <h1 className="title-text">This is my first React app :3</h1>
            <div className="button-container">
                {buttonPhrases.map((phrase, index) => (
                    <ButtonsWithPhrases key={index} buttonName={phrase} />
                ))}
            </div>
        </div>
    );
};

export default MainDivWithTitle;