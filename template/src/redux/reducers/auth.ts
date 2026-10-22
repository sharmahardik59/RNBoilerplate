
import type { User } from "@models/User";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  error: Error | null;
  isLoading: boolean;
  userData: User;
}

const initialState: AuthState = {
  error: null,
  isLoading: false,
  userData: {
    accessToken: "",
    email: "",
    firstName: "",
    gender: "",
    id: 0,
    image: "",
    lastName: "",
    refreshToken: "",
    username: ""
  },
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    hasError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    saveUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
  },
});

export const { hasError, saveUserData } = authSlice.actions;

export default authSlice.reducer;
