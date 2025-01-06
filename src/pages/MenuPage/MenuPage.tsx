import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MenuSection from "../../components/MenuSection/MenuSection";
import { Product } from "../../types/Product";

const MenuPage: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = (product: Product, quantity: number): void => {
    console.log(`Product added: ${product.name}, Quantity: ${quantity}`);
    setCartCount((prevCount) => prevCount + quantity);
  };

  return (
    <>
      <Header />
      <MenuSection addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default MenuPage;
