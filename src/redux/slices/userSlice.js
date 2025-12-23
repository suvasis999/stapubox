import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  address: '',
  pin: '',
  playStatus: '',
  likedSport: '',
  setFeedback: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setUserDetails(state, action) {
      Object.assign(state, action.payload);
    },

    
    setPlayStatus(state, action) {
      state.playStatus = action.payload;
    },

    setLikedSport(state, action) {
      state.likedSport = action.payload;
    },

   setFeedback(state, action) {
      state.feedback = action.payload;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const {
  setUserDetails,
  setPlayStatus,
  setLikedSport,
  clearUser,setFeedback
} = userSlice.actions;

export default userSlice.reducer;
