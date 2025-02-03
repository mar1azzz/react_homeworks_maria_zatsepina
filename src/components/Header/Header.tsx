import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.png";
import "./Header.css";
import { RootState } from "../../store";
import { clearCart } from "../../store/slices/cartSlice";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isUserLoggedIn = localStorage.getItem("userLoggedIn") === "1";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.setItem("userLoggedIn", "0");
    dispatch(clearCart());
    navigate("/login");
  };

  const handleCartClick = () => {
    if (!isUserLoggedIn) {
      alert("Пожалуйста, залогиньтесь, чтобы увидеть заказы.");
      navigate("/login");
    } else {
      navigate("/order");
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/company" className="nav-link">
          Company
        </Link>
        {isUserLoggedIn ? (
          <a onClick={handleLogout} className="nav-link header-btn">
            Logout
          </a>
        ) : (
          <Link to="/login" className="nav-link header-btn">
            Login
          </Link>
        )}
        <a className="nav-link header-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </a>
      </nav>
      <div className="header-cart" onClick={handleCartClick}>
        <img src={cart} alt="Cart" className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;
/*

// import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.png";
import "./Header.css";
import { RootState } from "../../store";
import { clearCart } from "../../store/slices/cartSlice";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isUserLoggedIn = localStorage.getItem("userLoggedIn") === "1";
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.setItem("userLoggedIn", "0");
    dispatch(clearCart());
  };

  const handleCartClick = () => {
    if (!isUserLoggedIn) {
      alert("Пожалуйста, залогиньтесь, чтобы увидеть заказы.");
    } else {
      alert("j");
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header-nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/menu" className="nav-link">Menu</a>
        <a href="/company" className="nav-link">Company</a>
        {isUserLoggedIn ? (
          <a onClick={handleLogout} className="nav-link header-btn">Logout</a>
        ) : (
          <a href="/login" className="nav-link header-btn">Login</a>
        )}
        <a className="nav-link header-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </a>
      </nav>
      <div className="header-cart" onClick={handleCartClick}>
        <img src={cart} alt="Cart" className="cart-icon" />
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;

*/