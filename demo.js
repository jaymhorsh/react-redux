// mpm install @reduxjs/toolkit

// counterSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: { value: 0 },
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//   },
// });
// export const { increment, decrement } = counterSlice.actions;
// export default counterSlice.reducer;


// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
// export default store;


// // Counter.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, decrement } from './counterSlice';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counterValue = useSelector((state) => state.counter.value);
//   return (
//     <div>
//       <p>Counter Value: {counterValue}</p>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };
// export default Counter;


// // App.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import Counter from './Counter';
// import store from './store';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <h1>Redux Toolkit Example</h1>
//         <Counter />
//       </div>
//     </Provider>
//   );
// };
// export default App;
