/* eslint-disable react/prop-types */
import { Component } from 'react';
import Price from '../Price/Price';
import Button from '../Button/Button';
import './Card.css';

class ProductCard extends Component {
    handleAddToCart = () => {
        const { addToCart, product } = this.props;
        const quantity = parseInt(this.quantityInput.value, 10);
        addToCart(quantity);
        console.log(`Added to cart: ${product.meal}, Quantity: ${quantity}`);
    };

    render() {
        const { product } = this.props;

        return (
            <div className="product-card">
                <img src={product.img} alt={product.meal} className="product-image" />
                <div className="product-info">
                    <div className="title-and-price">
                        <h3 className="product-name">{product.meal}</h3>
                        <Price amount={product.price} />
                    </div>
                    {/* Tooltip container */}
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
                            ref={(input) => (this.quantityInput = input)}
                        />
                        <Button
                            buttonName="Add to cart"
                            onClickHandler={this.handleAddToCart}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;
