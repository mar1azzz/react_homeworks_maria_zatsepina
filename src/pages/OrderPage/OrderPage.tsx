import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartItem from '../../components/CartItem/CartItem';
import OrderForm from '../../components/OrderForm/OrderForm';
import { Link } from 'react-router-dom';
import './OrderPage.css';
import { getImgUrl } from '../../app/getImage';

const OrderPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="order-page"
    style={{
                backgroundImage: `url(${getImgUrl("order_page_picture.png")})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
    >
    
      <div className="order-content">
        {cartItems.length > 0 ? (
          <>
            <div className="order-title">Finish your order</div>
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem key={`${item.id}-${item.name}`} item={item} />
              ))}
            </div>
            <div className="order-form-container">
              <OrderForm />
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty.</p>
            <Link to="/menu" className="menu-link">
              Back to menu
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
