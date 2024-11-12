import { Component } from 'react';
import logo from '../../assets/icons/logo.png';
import cart from '../../assets/icons/cart.png';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <nav className="header-nav">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/menu" className="nav-link">Menu</a>
                    <a href="/company" className="nav-link">Company</a>
                    <a href="/login" className="nav-link">Login</a>
                </nav>
                <div className="header-cart">
                    <a href="/cart">
                        <img src={cart} alt="Cart" />
                        <span className="cart-count">0</span>
                    </a>
                </div>
            </header>
        );
    }
}

export default Header;
