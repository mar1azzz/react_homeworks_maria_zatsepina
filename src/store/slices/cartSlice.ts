import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Обновляем количество существующего товара
        state.totalItems += action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
      } else {
        // Добавляем новый товар
        state.items.push(action.payload);
        state.totalItems += action.payload.quantity;
      }
    },
    updateCartItem(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const itemToUpdate = state.items.find(item => item.id === action.payload.id);
      if (itemToUpdate) {
        state.totalItems += action.payload.quantity - itemToUpdate.quantity;
        itemToUpdate.quantity = action.payload.quantity;
      }
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

export const { addToCart, updateCartItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
