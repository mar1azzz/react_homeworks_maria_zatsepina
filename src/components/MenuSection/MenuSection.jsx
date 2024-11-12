/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component } from 'react';
import { FlexContainer } from "../FlexContainer/FlexContainer";
import ProductCard from "../Card/Card";
import Button from "../Button/Button";
import BrowseMenuText from "../BrowseMenuText/BrowseMenuText";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import './MenuSection.css';

class MenuSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            displayedProducts: [],
            itemsPerPage: 6,
            page: 0,
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts = async () => {
        try {
            const response = await fetch('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');
            const data = await response.json();
            this.setState({ 
                products: data, 
                displayedProducts: data.slice(0, this.state.itemsPerPage),
                loading: false 
            });
        } catch (error) {
            this.setState({ error: 'Failed to fetch products', loading: false });
        }
    };

    loadMore = () => {
        const { products, displayedProducts, itemsPerPage, page } = this.state;
        const nextPage = page + 1;
        const newDisplayedProducts = products.slice(0, (nextPage + 1) * itemsPerPage);
        this.setState({
            displayedProducts: newDisplayedProducts,
            page: nextPage
        });
    };

    render() {
        const { addToCart } = this.props;
        const { displayedProducts, loading, error, products, itemsPerPage, page } = this.state;
        
        return (
            <section className="menu-section">
                <BrowseMenuText />
                <ToggleButtons />
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <>
                        <FlexContainer>
                            {displayedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                            ))}
                        </FlexContainer>  
                        <div className="menu-footer">
                            {displayedProducts.length < products.length && (
                                <Button buttonName="See more" onClickHandler={this.loadMore} />
                            )}
                        </div>
                    </>
                )}
            </section>
        );
    }
}

export default MenuSection;
