import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDecrement, onIncrement } from '../../../services/action';

export const Counter = () => {
  const counter = useSelector((state) => {
    return state.count;
  });
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(onIncrement(2));
  };

  const dec = () => {
    dispatch(onDecrement(2));
  };

  return (
    <div>
      <p>This is counter count is {counter}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};
