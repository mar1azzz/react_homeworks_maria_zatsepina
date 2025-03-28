import React, { useState, useEffect } from 'react';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import ProductCard from '../Card/Card';
import Button from '../Button/Button';
import BrowseMenuText from '../BrowseMenuText/BrowseMenuText';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import { MenuSectionProps } from '../../types/MenuSection';
import { ExtendedProduct } from '../../types/Product';
import { useFetchWithLogging } from '../../hooks/useFetch';
import { useTheme } from '../../context/ThemeContext';
import './MenuSection.css';

const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }): JSX.Element => {
  const apiUrl = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';
  const { theme } = useTheme();

  const { data: products, isLoading, error } = useFetchWithLogging<ExtendedProduct[]>(apiUrl);

  const [categories, setCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ExtendedProduct[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<ExtendedProduct[]>([]);
  const [category, setCategory] = useState<string>('Dessert');
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    if (products) {
      const uniqueCategories = products
      .map((item) => item.category)
      .filter((value, index, self) => self.indexOf(value) === index);
    setCategories(uniqueCategories);
    filterByCategory(category, products);
    }
  }, [products]);

  const filterByCategory = (selectedCategory: string, data: ExtendedProduct[] = products || []) => {
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

  const handleAddToCart = (product: ExtendedProduct) => (quantity: number) => {
    addToCart(product, quantity);
  };

  return (
    <section className={`menu-section ${theme}`}>
      <BrowseMenuText />
      <ToggleButtons filterByCategory={filterByCategory} categories={categories} />
      {isLoading && <p>Loading...</p>}
      {error && (
        <p className={`error-message ${theme}`}>
          Sorry, looks like we have some troubles on our server, please{' '}
          <span className="reload-link" onClick={() => window.location.reload()}>
            reload
          </span>{' '}
          the page or visit us later.
        </p>
      )}
      {!isLoading && !error && (
        <>
          <FlexContainer>
            {displayedProducts.map((product) => (
              <ProductCard
                key={`${product.id}-${product.category}-${product.name}`}
                product={product}
                addToCart={handleAddToCart(product)}
              />
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
