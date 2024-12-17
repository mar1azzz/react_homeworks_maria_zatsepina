import { Product } from "./Product";
export interface MenuSectionProps {
  addToCart: (product: Product, quantity: number) => void;
}