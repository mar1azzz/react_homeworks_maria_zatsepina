import { useState } from 'react';
import Button from '../Button/Button';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import { ToggleButtonsProps } from "../../types/ToggleButtons";
import './ToggleButtons.css';

const ToggleButtons = ({ filterByCategory, categories }: ToggleButtonsProps): JSX.Element => {
  const [selectedButton, setSelectedButton] = useState<string>('Dessert');

  const handleClick = (category: string): void => {
    setSelectedButton(category);
    filterByCategory(category);
  };

  return (
    <div className="toggle-buttons">
      <FlexContainer>
        {categories.map((category) => (
          <Button
            key={category}
            buttonName={category}
            isSelected={selectedButton === category}
            isInverted={true}
            onClickHandler={() => handleClick(category)}
          />
        ))}
      </FlexContainer>
    </div>
  );
};

export default ToggleButtons;
