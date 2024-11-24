/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import ProductCard from '../Card/Card';
import Button from '../Button/Button';
import BrowseMenuText from '../BrowseMenuText/BrowseMenuText';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import './MenuSection.css';

const MenuSection = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('Dessert');
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
                filterByCategory('Dessert', data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(true);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filterByCategory = (selectedCategory, data = products) => {
        setCategory(selectedCategory);
        const filtered = 
            selectedCategory === 'All' 
                ? data 
                : data.filter((product) => product.category === selectedCategory);
        setFilteredProducts(filtered);
        setDisplayedProducts(filtered.slice(0, itemsPerPage));
        setPage(0);
    };
    const loadMore = () => {
        const nextPage = page + 1;
        const additionalProducts = filteredProducts.slice(0, (nextPage + 1) * itemsPerPage);
        setDisplayedProducts(additionalProducts);
        setPage(nextPage);
    };
    return (
        <section className="menu-section">
            <BrowseMenuText />
            <ToggleButtons filterByCategory={filterByCategory} />
            {loading && <p>Loading...</p>}
            {error && (
                <p className="error-message">
                    Sorry, looks like we have some troubles on our server, please{' '}
                    <span className="reload-link" onClick={() => window.location.reload()}>
                        reload
                    </span>{' '}
                    the page or visit us later.
                </p>
            )}
            {!loading && !error && (
                <>
                    <FlexContainer>
                        {displayedProducts.map((product) => (
                            <ProductCard key={`${product.id}-${product.category}-${product.name}`} product={product} addToCart={addToCart} />
                        ))}
                    </FlexContainer>
                    <div className="menu-footer">
                        {displayedProducts.length < filteredProducts.length && (
                            <Button buttonName="See more" onClickHandler={loadMore} />
                        )}
                    </div>
                </>
            )}
        </section>
    );
};
export default MenuSection;
