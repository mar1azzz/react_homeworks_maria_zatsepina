import { useState } from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import MenuSection from '../../components/MenuSection/MenuSection';

const MenuPage = () => {
    const [cartCount, setCartCount] = useState(0);
    const addToCart = (quantity) => {
        setCartCount((prevCount) => prevCount + quantity);
    };
    return (
        <>
            <Header cartCount={cartCount} />
            <MenuSection addToCart={addToCart} />
            <Footer />
        </>
    );
};
export default MenuPage;