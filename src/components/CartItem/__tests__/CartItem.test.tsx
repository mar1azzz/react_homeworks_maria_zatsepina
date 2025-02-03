import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { removeFromCart, updateCartItem } from '../../../store/slices/cartSlice';
import CartItem from '../CartItem';

describe('CartItem', () => {
  const mockItem = {
    id: '1',
    name: 'Pizza',
    price: 10,
    quantity: 2,
    image: 'pizza.jpg',
  };

  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: {
        cart: {
          items: [mockItem],
          totalItems: 2,
        },
      },
    });
    jest.spyOn(store, 'dispatch');
  });

  it('должен отображать корректные данные о товаре', () => {
    render(
      <Provider store={store}>
        <CartItem item={mockItem} />
      </Provider>
    );

    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toHaveValue(2);
    expect(screen.getByAltText('Pizza')).toHaveAttribute('src', 'pizza.jpg');
  });

  it('должен удалять товар из корзины при клике на кнопку удаления', () => {
    render(
      <Provider store={store}>
        <CartItem item={mockItem} />
      </Provider>
    );

    const removeButton = screen.getByText('X');
    fireEvent.click(removeButton);

    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(mockItem.id));
  });

  it('должен обновлять количество товара при изменении значения в поле', () => {
    render(
      <Provider store={store}>
        <CartItem item={mockItem} />
      </Provider>
    );

    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '3' } });

    expect(store.dispatch).toHaveBeenCalledWith(
      updateCartItem({ id: mockItem.id, quantity: 3 })
    );
  });

  it('не должен обновлять количество, если значение меньше 1', () => {
    render(
      <Provider store={store}>
        <CartItem item={mockItem} />
      </Provider>
    );

    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '0' } });

    expect(store.dispatch).not.toHaveBeenCalledWith(
      updateCartItem({ id: mockItem.id, quantity: 0 })
    );
    expect(quantityInput).toHaveValue(2);
  });
});
