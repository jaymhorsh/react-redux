
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, clearCount } from '../store/counterSlice';
import classes from './Counter.module.css';



const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);

  const incrementHandler = () => {
    dispatch(increment())
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };
  const clearCountHandler = () => {
    dispatch(clearCount())
  };
  return (
    <main className={classes.counter}>
    <h1>Redux Counter</h1>
    <div className={classes.value}>{counterValue}</div>
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
    <button onClick={clearCountHandler}>Clear Counter</button>
  </main>
  );
};

export default Counter;




