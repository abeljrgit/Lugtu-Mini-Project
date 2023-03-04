import axios from 'axios';
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

export const onModalOpen = (val) => {
  return {
    type: actions.OPEN_MODAL,
    payload: val,
  };
};

export const onModalClose = (val) => {
  return {
    type: actions.CLOSE_MODAL,
    payload: val,
  };
};

export const getPopularPlayers = () => {
  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/players',
    params: { team: '1', season: '2021' },
    headers: {
      'X-RapidAPI-Key': '5d11cc9f0fmshcb3fb878598e3f0p18a51ajsnd07a37953b91',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
    },
  };

  return (dispatch) => {
    axios
      .request(options)
      .then((res) => {
        dispatch(
          ((data) => {
            return {
              type: actions.GET_POPULAR_PLAYERS,
              payload: res?.data?.response ? res.data.response : [],
            };
          })(res.data)
        );
        // dispatch(
        //   onOpenModal({
        //     title: 'Success',
        //     description: ' User was registered!\nPlease Check the result tab',
        //   })
        // );
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
