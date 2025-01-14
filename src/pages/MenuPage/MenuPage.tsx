import { useState } from "react";
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
      <MenuSection addToCart={addToCart} />
    </>
  );
};

export default MenuPage;
