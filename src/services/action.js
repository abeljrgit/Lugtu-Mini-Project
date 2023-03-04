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

export const onAddPlayerAndScore = (val) => {
  return {
    type: actions.ADD_PLAYER,
    payload: val,
  };
};

export const onDeletePlayerAndScore = (val) => {
  return {
    type: actions.DELETE_PLAYER,
    payload: val,
  };
};
