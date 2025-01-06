import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
interface CartState {
  items: CartItem[];
  totalItems: number;
}
const initialState: CartState = {
  items: [],
  totalItems: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      state.totalItems += action.payload.quantity;
    },
    removeFromCart(state, action: PayloadAction<string>) {
        const itemToRemove = state.items.find(item => item.id === action.payload);
        if (itemToRemove) {
          state.totalItems -= itemToRemove.quantity; 
          state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
