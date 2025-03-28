import cartReducer, { addToCart, updateCartItem, removeFromCart, clearCart, CartState } from "../cartSlice";

describe("cartSlice", () => {
  let initialState: CartState;

  beforeEach(() => {
    initialState = {
      items: [],
      totalItems: 0,
    };
  });

  it("должен добавить новый товар в корзину", () => {
    const item = { id: "1", name: "Pizza", price: 10.00, quantity: 2, image: "img.jpg" };
    const newState = cartReducer(initialState, addToCart(item));
    
    expect(newState.items).toHaveLength(1);
    expect(newState.items[0]).toEqual(item);
    expect(newState.totalItems).toBe(2);
  });

  it("должен обновлять количество уже добавленного товара", () => {
    const item = { id: "1", name: "Pizza", price: 10.00, quantity: 2, image: "img.jpg" };
    let state = cartReducer(initialState, addToCart(item));

    const updatedState = cartReducer(state, addToCart({ ...item, quantity: 3 }));
    expect(updatedState.items[0].quantity).toBe(5);
    expect(updatedState.totalItems).toBe(5);
  });

  it("должен обновлять количество конкретного товара", () => {
    const item = { id: "1", name: "Pizza", price: 10.00, quantity: 2, image: "img.jpg" };
    let state = cartReducer(initialState, addToCart(item));

    const updatedState = cartReducer(state, updateCartItem({ id: "1", quantity: 5 }));
    expect(updatedState.items[0].quantity).toBe(5);
    expect(updatedState.totalItems).toBe(5);
  });

  it("должен удалять товар из корзины", () => {
    const item = { id: "1", name: "Pizza", price: 10.00, quantity: 2, image: "img.jpg" };
    let state = cartReducer(initialState, addToCart(item));

    const newState = cartReducer(state, removeFromCart("1"));
    expect(newState.items).toHaveLength(0);
    expect(newState.totalItems).toBe(0);
  });

  it("должен очищать корзину", () => {
    const stateWithItems = {
      items: [
        { id: "1", name: "Pizza", price: 10.00, quantity: 2, image: "img.jpg" },
        { id: "2", name: "Burger", price: 5.00, quantity: 2, image: "img.jpg" },
      ],
      totalItems: 3,
    };

    const newState = cartReducer(stateWithItems, clearCart());
    expect(newState.items).toHaveLength(0);
    expect(newState.totalItems).toBe(0);
  });
});
