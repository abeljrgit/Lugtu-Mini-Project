import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Images } from '../../../assets';
export const PlayerForm = () => {
  const [playerForm, setPlayerForm] = useState();

  const formSubmitHandler = (e) => {
    e.preventDefault();
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
            }}
          />
          <TextField
            variant="standard"
            label="Player Name"
            inputProps={{ style: { borderColor: 'white' } }}
            sx={{ ...textFieldStyle, marginBottom: 2 }}
          />
          <Typography></Typography>
          <TextField
            variant="standard"
            label="Score"
            sx={{ ...textFieldStyle, marginBottom: 8 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#539165' }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Card>
  );
};
