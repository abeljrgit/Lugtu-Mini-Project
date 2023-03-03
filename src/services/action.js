import * as actions from './actionType';

export const onIncrement = (val) => {
  return {
    type: actions.INC,
    payload: val,
  };
};

export const onDecrement = (val) => {
  return {
    type: actions.DEC,
    payload: val,
  };
};
