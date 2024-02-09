import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false };
const uiSlice = createSlice({
  name: "show cart",
  initialState: initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});
export const { toggleCart } = uiSlice.actions;
export default uiSlice.reducer;
