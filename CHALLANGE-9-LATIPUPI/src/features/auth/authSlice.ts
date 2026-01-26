import {createSlice } from '@reduxjs/toolkit';

interface AuthSliceState {
    token: string | null;
    user: string | null;   
    isAuthenticated: boolean
}

const initialState: AuthSliceState = {
   token: null,
    user: null,
    isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
    reducers: {
    setAuth: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const {setAuth, logout } = authSlice.actions;
export default authSlice.reducer;