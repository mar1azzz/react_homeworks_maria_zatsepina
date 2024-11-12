import { Component } from 'react';
import Button from '../Button/Button';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import './ToggleButtons.css';

class ToggleButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButton: 0
        };
    }

    handleClick = (index) => {
        this.setState({ selectedButton: index });
    };

    render() {
        const { selectedButton } = this.state;
        const buttonData = [
            { id: 'desert', label: 'Desert' },
            { id: 'dinner', label: 'Dinner' },
            { id: 'breakfast', label: 'Breakfast' }
        ];

        return (
            <div className='toggle-buttons'>
                <FlexContainer>
                    {buttonData.map((button, index) => (
                        <Button
                            key={button.id}
                            buttonName={button.label}
                            isSelected={selectedButton === index}
                            isInverted={true}
                            onClickHandler={() => this.handleClick(index)}
                        />
                    ))}
                </FlexContainer>
            </div>
        );
    }
}

export default ToggleButtons;
