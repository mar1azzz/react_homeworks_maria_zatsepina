import React from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.png";
import "./Header.css";
import { RootState } from "../../store";

const Header: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.totalItems);
  const isVerified = useSelector((state: RootState) => state.user.isVerified);

  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className="header-nav">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/menu" className="nav-link">
          Menu
        </a>
        <a href="/company" className="nav-link">
          Company
        </a>
        {isVerified ? (
          <a href="/logout" className="nav-link">
            Logout
          </a>
        ) : (
          <a href="/login" className="nav-link">
            Login
          </a>
        )}
      </nav>
      <div className="header-cart">
        <a href="/cart">
          <img src={cart} alt="Cart" className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
