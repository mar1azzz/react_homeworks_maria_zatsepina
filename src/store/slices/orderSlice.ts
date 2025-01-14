import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from '../../store/slices/cartSlice';

interface Order {
  user: string;
  cart: CartItem[];
  address: {
    street: string;
    house: string;
  };
  date: string;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
