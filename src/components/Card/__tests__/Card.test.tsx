import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addToCart } from "../../../store/slices/cartSlice";
import ProductCard from "../Card";

describe("ProductCard", () => {
  const product = {
    id: "1",
    meal: "Pizza",
    name: "Pizza",
    category: "Fast food",
    price: 10,
    img: "pizza.jpg",
    instructions: "Delicious pizza",
  };

  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [],
          totalItems: 0,
        },
      },
    });
    jest.spyOn(store, "dispatch"); // Подменяем dispatch для тестов
  });

  it("должен отображать продукт с правильными данными", () => {
    const mockAddToCart = jest.fn();
    render(
      <Provider store={store}>
        <ProductCard product={product}
        addToCart={mockAddToCart}/>
      </Provider>
    );

    expect(screen.getByText("Pizza")).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });

  it("должен добавить товар в корзину при клике на кнопку", () => {
    const mockAddToCart = jest.fn();
    render(
      <Provider store={store}>
        <ProductCard product={product}
        addToCart={mockAddToCart}/>
      </Provider>
    );

    const addButton = screen.getByText("Add to cart");
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      addToCart({ id: "1", name: "Pizza", price: 10, quantity: 1, image: "pizza.jpg" })
    );
  });

  it("должен учитывать введенное пользователем количество", () => {
    const mockAddToCart = jest.fn();
    render(
      <Provider store={store}>
        <ProductCard product={product}
        addToCart={mockAddToCart}/>
      </Provider>
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "3" } });

    const addButton = screen.getByText("Add to cart");
    fireEvent.click(addButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      addToCart({ id: "1", name: "Pizza", price: 10, quantity: 3, image: "pizza.jpg" })
    );
  });
});
