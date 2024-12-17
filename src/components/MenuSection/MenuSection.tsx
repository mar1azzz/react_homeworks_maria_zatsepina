import { useEffect, useState } from 'react';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import ProductCard from '../Card/Card';
import Button from '../Button/Button';
import BrowseMenuText from '../BrowseMenuText/BrowseMenuText';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import { MenuSectionProps } from "../../types/MenuSection";
import { ExtendedProduct } from '../../types/Product';
import './MenuSection.css';

const MenuSection: React.FC<MenuSectionProps> = ({ addToCart }): JSX.Element => {
  const [products, setProducts] = useState<ExtendedProduct[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<ExtendedProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ExtendedProduct[]>([]);
  const [category, setCategory] = useState<string>('Dessert');
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const apiUrl = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: ExtendedProduct[] = await response.json();
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

  const filterByCategory = (selectedCategory: string, data: ExtendedProduct[] = products): void => {
    setCategory(selectedCategory);
    const filtered =
      selectedCategory === 'All'
        ? data
        : data.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filtered);
    setDisplayedProducts(filtered.slice(0, itemsPerPage));
    setPage(0);
  };

  const loadMore = (): void => {
    const nextPage = page + 1;
    const additionalProducts = filteredProducts.slice(0, (nextPage + 1) * itemsPerPage);
    setDisplayedProducts(additionalProducts);
    setPage(nextPage);
  };

  const handleAddToCart = (product: ExtendedProduct) => (quantity: number) => {
    addToCart(product, quantity);
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
