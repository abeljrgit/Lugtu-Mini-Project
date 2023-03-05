import { Card, TextField } from '@mui/material';
import React from 'react';

export const ContactForm = () => {
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
        flex: 2,
        bgcolor: '#000000D3',
        p: 2,
        '@media (max-width: 768px)': {
          flex: 'unset',
          height: '300px',
        },
      }}
    >
      <form
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField variant="standard" label="Name" sx={textFieldStyle} />
        <TextField variant="standard" label="Email" sx={textFieldStyle} />
        <TextField
          variant="standard"
          label="Contact Number"
          sx={textFieldStyle}
        />
        <TextField variant="standard" label="Message" sx={textFieldStyle} />
      </form>
    </Card>
  );
};
