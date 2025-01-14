import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  username: string;
  password: string;
}
interface UserState {
  loggedInUser: User | null;
  allUsers: User[];
  isVerified: boolean;
}
const initialState: UserState = {
  loggedInUser: null,
  allUsers: [],
  isVerified: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<User>) {
      state.loggedInUser = action.payload;
      state.isVerified = true;
    },
    logOut(state) {
      state.loggedInUser = null;
      state.isVerified = false;
    },
    addUser(state, action: PayloadAction<User>) {
      state.allUsers.push(action.payload);
    },
    setVerification(state, action: PayloadAction<boolean>) {
      state.isVerified = action.payload;
      localStorage.setItem('userLoggedIn', '1');
    },
  },
});

export const { logIn, logOut, addUser, setVerification } = userSlice.actions;
export default userSlice.reducer;
