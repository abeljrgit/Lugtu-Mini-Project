import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Images } from '../../../assets';
import { useDispatch } from 'react-redux';
import { onAddPlayerAndScore, onModalOpen } from '../../../services/action';
import { v4 as uuidv4 } from 'uuid';

export const PlayerForm = () => {
  const [playerForm, setPlayerForm] = useState({
    playerInputValue: '',
    scoreInputValue: '',
    error: {
      playerInputError: '',
      scoreInputError: '',
    },
    isPlayerInputValid: false,
    isScoreInputValid: false,
  });
  const dispatch = useDispatch();

  const onChangHandler = (type, value) => {
    let isPlayerInputValid = false;
    let isScoreInputValid = false;
    let playerInputError = '';
    let scoreInputError = '';
    if (type === 'playerInput') {
      console.log(value);
      if (value === '') {
        playerInputError = 'Player name cannot be empty';
        isPlayerInputValid = false;
      } else {
        playerInputError = '';
        isPlayerInputValid = true;
      }
      setPlayerForm((prev) => {
        return {
          ...prev,
          playerInputValue: value,
          error: { ...prev.error, playerInputError },
          isPlayerInputValid,
        };
      });
    } else if (type === 'scoreInput') {
      console.log(value);
      if (value === '') {
        scoreInputError = 'Player name cannot be empty';
        isScoreInputValid = false;
      } else {
        scoreInputError = '';
        isScoreInputValid = true;
      }
      setPlayerForm((prev) => {
        return {
          ...prev,
          scoreInputValue: value,
          error: { ...prev.error, scoreInputError },
          isScoreInputValid,
        };
      });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (playerForm.isPlayerInputValid && playerForm.isScoreInputValid) {
      dispatch(
        onAddPlayerAndScore({
          id: uuidv4(),
          playerName: playerForm.playerInputValue,
          score: playerForm.scoreInputValue,
        })
      );
      dispatch(
        onModalOpen({
          visible: true,
          title: 'Success',
          description:
            'Player and score has been added\nPlease check score page.',
        })
      );
      setPlayerForm((prev) => {
        return {
          playerInputValue: '',
          scoreInputValue: '',
          error: {
            playerInputError: '',
            scoreInputError: '',
          },
          isPlayerInputValid: false,
          isScoreInputValid: false,
        };
      });
    } else {
      dispatch(
        onModalOpen({
          visible: true,
          title: 'Failed',
          description: 'Player and score were not added\nPlease try again.',
        })
      );
    }
  };

  const textFieldStyle = {
    ['& label.Mui-focused']: {
      color: 'white',
    },
    ['& label']: {
      color: '#FFFFFFC2',
    },
    ['& .MuiInputBase-input']: {
      color: 'white',
    },
    ['& .MuiInput-underline:hover:before']: {
      borderBottomColor: 'white!important',
    },
    ['& .MuiInput-underline:after']: {
      borderBottomColor: 'white',
    },
    ['& .MuiInput-underline:before']: {
      borderBottomColor: 'white',
    },
  };

  const errorTextStyle = { mt: 1, color: 'yellow', fontSize: 12 };

  return (
    <Card
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '300px',
        height: '400px',
        backgroundColor: 'transparent',
      }}
    >
      <form onSubmit={formSubmitHandler} style={{ height: '100%' }}>
        <Box
          sx={{
            height: '100%',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${Images.playerFormBg})`,
              backgroundPosition: 'center',
              opacity: 0.8,
              zIndex: -1,
            }}
          />
          <TextField
            variant="standard"
            label="Player Name"
            inputProps={{ style: { borderColor: 'white' } }}
            sx={textFieldStyle}
            value={playerForm.playerInputValue}
            onChange={(e) => {
              onChangHandler('playerInput', e.target.value);
            }}
          />
          <Typography sx={errorTextStyle}>
            {playerForm.error.playerInputError === ''
              ? '\u00A0'
              : playerForm.error.playerInputError}
          </Typography>
          <TextField
            type="number"
            variant="standard"
            label="Score"
            sx={{
              ...textFieldStyle,
              '& input[type=number]': {
                MozAppearance: 'textfield',
              },
              '& input[type=number]::-webkit-outer-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
              '& input[type=number]::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0,
              },
            }}
            value={playerForm.scoreInputValue}
            onChange={(e) => {
              onChangHandler('scoreInput', e.target.value);
            }}
          />
          <Typography sx={errorTextStyle}>
            {playerForm.error.scoreInputError === ''
              ? '\u00A0'
              : playerForm.error.scoreInputError}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#539165', mt: 8 }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Card>
  );
};
