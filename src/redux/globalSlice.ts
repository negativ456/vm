import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  user: {
    isAuth: boolean;
  };
};

const initialState: InitialStateType = {
  user: {
    isAuth: false,
  },
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    changeAuth(state, action: PayloadAction<{ isAuth: boolean }>) {
      state.user.isAuth = action.payload.isAuth;
    },
  },
});

export const { changeAuth } = globalSlice.actions;

export default globalSlice.reducer;
