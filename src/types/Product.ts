export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
}

export interface ExtendedProduct extends Product {
  img: string;
  meal: string;
  instructions: string;
}

export interface ProductCardProps {
  product: ExtendedProduct;
  addToCart: (quantity: number) => void;
}