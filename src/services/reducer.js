import * as actions from './actionType';

// Central Storage
const initState = {
  count: 88,
  playerData: [
    {
      id: 1,
      playerName: 'Abel',
      score: 85,
    },
    {
      id: 2,
      playerName: 'Ronald',
      score: 95,
    },
    {
      id: 3,
      playerName: 'Reyes',
      score: 105,
    },
    {
      id: 4,
      playerName: 'Leo',
      score: 115,
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log(action);

  switch (action.type) {
    case actions.INC:
      return { ...state, count: state.count + action.payload };
    case actions.DEC:
      return { ...state, count: state.count - action.payload };
    case actions.ADD_PLAYER:
      return { ...state, playerData: [...state.playerData, action.payload] };
    default:
      return state;
  }

  return state;
};

export default reducer;
