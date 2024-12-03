/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '../Button/Button';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import './ToggleButtons.css';

const ToggleButtons = ({ filterByCategory }) => {
    const [selectedButton, setSelectedButton] = useState('dessert');
    const buttonData = [
        { id: 'dessert', label: 'Dessert' },
        { id: 'dinner', label: 'Dinner' },
        { id: 'breakfast', label: 'Breakfast' },
    ];
    const handleClick = (buttonId, category) => {
        setSelectedButton(buttonId);
        filterByCategory(category);
    };
    return (
        <div className="toggle-buttons">
            <FlexContainer>
                {buttonData.map((button) => (
                    <Button
                        key={`${button.id}-${button.label}`}
                        buttonName={button.label}
                        isSelected={selectedButton === button.id}
                        isInverted={true}
                        onClickHandler={() => handleClick(button.id, button.label)}
                    />
                ))}
            </FlexContainer>
        </div>
    );
};
export default ToggleButtons;
