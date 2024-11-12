/* eslint-disable react/prop-types */
import { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        const { buttonName, onClickHandler, isSelected, isInverted } = this.props;
        return (
            <button
                className={`button-with-phrase ${isSelected ? 'clicked' : ''} ${isInverted ? 'inverted' : ''}`}
                onClick={onClickHandler}
            >
                {buttonName}
            </button>
        );
    }
}

export default Button;
