import * as actions from './actionType';

// Central Storage
const initState = {
  count: 88,
  playerData: [],
};

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case actions.INC:
      return { ...state, count: state.count + action.payload };
    case actions.DEC:
      return { ...state, count: state.count - action.payload };
    case actions.ADD_PLAYER:
      console.log([...state.playerData, action.payload]);
      return { ...state, playerData: [...state.playerData, action.payload] };
    default:
      return state;
  }
};

export default reducer;
