/*import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../../store/slices/cartSlice";
import Header from "../Header";
import { ThemeProvider } from "../../../context/ThemeContext";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  let store: ReturnType<typeof configureStore>;  

  beforeAll(() => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });
  });

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [
            { id: "1", name: "Pizza", price: 10, quantity: 2, image: "pizza.jpg" },
            { id: "2", name: "Burger", price: 5, quantity: 1, image: "burger.jpg" },
          ],
          totalItems: 3,
        },
      },
    });
  });

  it("должен отображать правильное количество товаров в корзине", () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const cartCount = screen.getByText("3");
    expect(cartCount).toBeInTheDocument();
  });

*/



import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import cartReducer, { clearCart } from "../../../store/slices/cartSlice";
import Header from "../Header";
import { ThemeProvider } from "../../../context/ThemeContext";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // сохраняем другие импорты нетронутыми
  useNavigate: jest.fn(), // мокаем useNavigate
}));
  
describe("Header", () => {
  let store: ReturnType<typeof configureStore>;
  const mockNavigate = jest.fn();

  beforeAll(() => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [
            { id: "1", name: "Pizza", price: 10, quantity: 2, image: "pizza.jpg" },
            { id: "2", name: "Burger", price: 5, quantity: 1, image: "burger.jpg" },
          ],
          totalItems: 3,
        },
      },
    });

    jest.spyOn(window, "alert").mockImplementation(() => {});

    (jest.mocked(require("react-router-dom").useNavigate) as jest.Mock).mockReturnValue(mockNavigate);

    jest.spyOn(store, "dispatch");
    (jest.requireMock("react-router-dom").useNavigate as jest.Mock).mockImplementation(() => mockNavigate);
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("должен отображать правильное количество товаров в корзине", () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const cartCount = screen.getByText("3");
    expect(cartCount).toBeInTheDocument();
  });

  it("должен перенаправлять на страницу логина, если пользователь не залогинен и кликает на корзину", () => {
    localStorage.setItem("userLoggedIn", "0");

    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const cartIcon = screen.getByAltText("Cart");
    fireEvent.click(cartIcon);

    expect(window.alert).toHaveBeenCalledWith("Пожалуйста, залогиньтесь, чтобы увидеть заказы.");
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  it("должен перенаправлять на страницу заказов, если пользователь залогинен и кликает на корзину", () => {
    localStorage.setItem("userLoggedIn", "1");

    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const cartIcon = screen.getByAltText("Cart");
    fireEvent.click(cartIcon);

    expect(mockNavigate).toHaveBeenCalledWith("/order");
  });

  it("должен вызывать clearCart и перенаправлять на страницу логина при выходе из аккаунта", () => {
    localStorage.setItem("userLoggedIn", "1");

    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    expect(store.dispatch).toHaveBeenCalledWith(clearCart());
    expect(localStorage.getItem("userLoggedIn")).toBe("0");
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });
});
