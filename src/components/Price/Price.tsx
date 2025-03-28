import './Price.css';
import { PriceProps } from '../../types/Price';

const Price: React.FC<PriceProps> = ({
  amount,
  currency = 'USD',
  locale = 'en-US',
}) => {
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);

  return <span className="price">{formattedPrice}</span>;
};

export default Price;
