import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExtendedProduct } from '../../types/Product';

interface MenuState {
  items: ExtendedProduct[];
  error: boolean;
  loading: boolean;
}
const initialState: MenuState = {
  items: [],
  error: false,
  loading: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenuStart(state) {
      state.loading = true;
      state.error = false;
    },
    fetchMenuSuccess(state, action: PayloadAction<ExtendedProduct[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchMenuFailure(state) {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchMenuStart, fetchMenuSuccess, fetchMenuFailure } = menuSlice.actions;
export default menuSlice.reducer;
