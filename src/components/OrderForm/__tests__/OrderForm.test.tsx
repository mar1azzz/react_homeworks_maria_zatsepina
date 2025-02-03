import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { clearCart } from "../../../store/slices/cartSlice";
import orderReducer, { createOrder } from "../../../store/slices/orderSlice";
import userReducer from "../../../store/slices/userSlice";
import OrderForm from '../OrderForm';

describe('OrderForm', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
        order: orderReducer,
        user: userReducer,
      },
      preloadedState: {
        cart: {
          items: [],
          totalItems: 0,
        },
        user: {
          loggedInUser: { username: 'testUser', password: 'testPassword' },
          allUsers: [],
          isVerified: true,
        },
        order: {
          orders: [],
        },
      },
    });

    jest.spyOn(store, 'dispatch');

    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('должен отображать ошибку, если корзина пуста', () => {
    render(
      <Provider store={store}>
        <OrderForm />
      </Provider>
    );

    const streetInput = screen.getByLabelText(/Street/i);
    const houseInput = screen.getByLabelText(/House/i);
    const orderButton = screen.getByText(/Order/i);

    fireEvent.change(streetInput, { target: { value: 'Main St' } });
    fireEvent.change(houseInput, { target: { value: '123' } });
    fireEvent.click(orderButton);

    expect(screen.getByText(/Your cart is empty/i)).toBeInTheDocument();
    expect(store.dispatch).not.toHaveBeenCalledWith(clearCart());
  });

  it('должен вызывать clearCart и createOrder после успешного заказа', () => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
        order: orderReducer,
        user: userReducer,
      },
      preloadedState: {
        cart: {
          items: [
            { id: '1', name: 'Pizza', price: 10, quantity: 2, image: 'pizza.jpg' },
          ],
          totalItems: 2,
        },
        user: {
          loggedInUser: { username: 'testUser', password: 'testPassword' },
          allUsers: [],
          isVerified: true,
        },
        order: {
          orders: [],
        },
      },
    });

    jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <OrderForm />
      </Provider>
    );

    const streetInput = screen.getByLabelText(/Street/i);
    const houseInput = screen.getByLabelText(/House/i);
    const orderButton = screen.getByText(/Order/i);

    fireEvent.change(streetInput, { target: { value: 'Main St' } });
    fireEvent.change(houseInput, { target: { value: '123' } });
    fireEvent.click(orderButton);

    expect(store.dispatch).toHaveBeenCalledWith(
      createOrder({
        user: 'testUser',
        cart: [
          { id: '1', name: 'Pizza', price: 10, quantity: 2, image: 'pizza.jpg' },
        ],
        address: { street: 'Main St', house: '123' },
        date: expect.any(String),
      })
    );

    expect(store.dispatch).toHaveBeenCalledWith(clearCart());
    expect(screen.queryByText(/Your cart is empty/i)).not.toBeInTheDocument();
    expect(window.alert).toHaveBeenCalledWith("Order placed successfully!");
  });
});
