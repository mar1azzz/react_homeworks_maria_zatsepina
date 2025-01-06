import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Price from '../Price/Price';
import Button from '../Button/Button';
import { ProductCardProps } from '../../types/Product';
import { addToCart } from '../../store/slices/cartSlice';
import { CartItem } from '../../store/slices/cartSlice';
import './Card.css';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const quantityInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const quantity = parseInt(quantityInput.current?.value || '1', 10);
    const cartItem: CartItem = {
      id: product.id, 
      name: product.meal, 
      price: product.price,
      quantity
    };
  
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.meal} className="product-image" />
      <div className="product-info">
        <div className="title-and-price">
          <h3 className="product-name">{product.meal}</h3>
          <Price amount={product.price} />
        </div>
        <div className="product-description-container">
          <p className="product-description">{product.instructions}</p>
          <span className="tooltip-text">{product.instructions}</span>
        </div>
        <div className="product-actions">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="product-quantity no-arrows"
            ref={quantityInput}
          />
          <Button buttonName="Add to cart" onClickHandler={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
