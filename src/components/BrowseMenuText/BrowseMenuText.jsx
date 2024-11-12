import { Component } from 'react';
import './BrowseMenuText.css';

class BrowseMenuText extends Component {
  render() {
    return (
      <div className="menu-text-container">
        <h2 className="menu-title">Browse our menu</h2>
        <p className="menu-description">
          Use our menu to place an order online, or{' '}
          <span className="phone-tooltip">
            phone
            <span className="tooltip-text">+370 123 456 78</span>
          </span>{' '}
          our store to place a pickup order. Fast and fresh food.
        </p>
      </div>
    );
  }
}

export default BrowseMenuText;
