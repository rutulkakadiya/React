import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/CounterSlice';

export default function ReduxCounter() {
    
  const count = useSelector((state) => state.CounterKey);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <h1>{count.count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
