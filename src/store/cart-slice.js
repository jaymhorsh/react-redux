import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++
    //   If the item does not exist in t3he array push this else just increment the quantity by number of click
      if (!existingItem) {
        state.items.push({ 
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else{
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else { 
        existingItem.quantity--;
      }
    },
  },
});
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
