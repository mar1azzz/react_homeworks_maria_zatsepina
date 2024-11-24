/* eslint-disable react/prop-types */
import './Price.css';

const Price = ({ amount, currency = 'USD', locale = 'en-US' }) => {
    const formattedPrice = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(amount);

    return <span className="price">{formattedPrice}</span>;
};
export default Price;
