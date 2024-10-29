import { useState } from 'react';
import Button from '../Button/Button';
import { Row } from '../Row/Row';
import './ToggelButtons.css';

const ToggleButtons = () => {
    const [selectedButton, setSelectedButton] = useState(0);
    const handleClick = (index) => {
        setSelectedButton(index);
        console.log(index + 1);
    };
    return (
        <div className='togger-buttons'>
            <Row>
                <Button
                    buttonName="Desert"
                    isSelected={selectedButton === 0}
                    isInverted={true}
                    onClickHandler={() => handleClick(0)}
                />
                <Button
                    buttonName="Dinner"
                    isSelected={selectedButton === 1}
                    isInverted={true}
                    onClickHandler={() => handleClick(1)}
                />
                <Button
                    buttonName="Breakfast"
                    isSelected={selectedButton === 2}
                    isInverted={true}
                    onClickHandler={() => handleClick(2)}
                />
            </Row>
        </div>
    );
};
export default ToggleButtons;
