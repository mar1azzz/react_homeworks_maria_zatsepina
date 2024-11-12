/* eslint-disable react/prop-types */
import { Component } from 'react';
import './Price.css';

class Price extends Component {
    render() {
        const { amount, currency = 'USD', locale = 'en-US' } = this.props;
        const formattedPrice = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
        }).format(amount);
        return <span className="price">{formattedPrice}</span>;
    }
}

export default Price;
