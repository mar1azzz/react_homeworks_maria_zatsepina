import React from 'react';
import logo from '../../assets/icons/logo.png';
import cart from '../../assets/icons/cart.png';
import { HeaderProps } from '../../types/Header';
import './Header.css';

const Header: React.FC<HeaderProps> = ({ cartCount }) => (
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
      <a href="/login" className="nav-link">
        Login
      </a>
    </nav>
    <div className="header-cart">
      <a href="/cart">
        <img src={cart} alt="Cart" className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </a>
    </div>
  </header>
);

export default Header;
