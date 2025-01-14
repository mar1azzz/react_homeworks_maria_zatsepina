import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../store/slices/cartSlice';
import { CartItem as CartItemType } from '../../store/slices/cartSlice';
import Price from '../Price/Price';
import './CartItem.css';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
      dispatch(updateCartItem({ id: item.id, quantity: newQuantity }));
    }
  };

  const totalPrice = (item.price * quantity).toFixed(2);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <Price amount={parseInt(totalPrice)} />
      </div>
      <input
        type="number"
        className="cart-item-quantity"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button className="cart-item-remove" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default CartItem;
