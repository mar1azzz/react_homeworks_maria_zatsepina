import { useState } from 'react';
import Button from '../Button/Button';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import { ButtonData, ToggleButtonsProps } from "../../types/ToggleButtons"
import './ToggleButtons.css';

const ToggleButtons = ({ filterByCategory }: ToggleButtonsProps): JSX.Element => {
    const [selectedButton, setSelectedButton] = useState<string>('dessert');

    const buttonData: ButtonData[] = [
        { id: 'dessert', label: 'Dessert' },
        { id: 'dinner', label: 'Dinner' },
        { id: 'breakfast', label: 'Breakfast' },
    ];

    const handleClick = (buttonId: string, category: string): void => {
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
