/* eslint-disable react/prop-types */
import Price from '../Price/Price'
import Button from '../Button/Button';
import { getImgUrl } from '../../app/getImage';
import './Card.css';

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        console.log(`Добавлено в корзину: ${product.name}`);
    };
    return (
        <div className="product-card">
            <img src={getImgUrl(product.image)} alt={product.name} className="product-image" />
            <div className='product-info'>
                <div className='title-and-price'>
                    <h3 className="product-name">{product.name}</h3>
                    <Price amount={product.price} />
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                    <input type="number" min="1" defaultValue="1" className="product-quantity no-arrows" />
                    <Button
                        buttonName="Add to cart"
                        onClickHandler={handleAddToCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;