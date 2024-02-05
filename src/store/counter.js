import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState:{ value: 0},
  reducers: {
    increment: (state) => {
      state.value ++;
    },
    decrement: (state) => {
      // state.value += 1
      state.value --;
    },
    //Adding payload
    increasrByFive:(state, action)=>{
      state.value= state.value +  action.payload.amount
    },
    clearCount: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement,increasrByFive, clearCount } = counterSlice.actions;
export default counterSlice.reducer
// export const counterAction =  counterSlice.actions
// const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//   },
// });

// export default store;
