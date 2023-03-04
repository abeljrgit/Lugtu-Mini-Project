import * as actions from './actionType';

// Central Storage
const initState = {
  count: 88,
  modal: { visible: false, title: '', description: '' },
  playerData: [],
  popularPlayers: [],
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
    case actions.DELETE_PLAYER:
      return {
        ...state,
        playerData: [
          ...state.playerData.filter((data) => data.id != action.payload),
        ],
      };
    case actions.OPEN_MODAL:
      return { ...state, modal: { ...state.modal, ...action.payload } };
    case actions.CLOSE_MODAL:
      return {
        ...state,
        modal: { visible: false, title: '', description: '' },
      };
    case actions.GET_POPULAR_PLAYERS:
      return { ...state, popularPlayers: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
