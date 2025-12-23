import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobile: '',
  otp: '',
  token: null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const {
  setMobile,
  setOtp,
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
