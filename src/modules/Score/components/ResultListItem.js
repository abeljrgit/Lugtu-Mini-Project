import React from 'react';
import { Icons } from '../../../assets';
import { Card, IconButton, Stack, Typography } from '@mui/material';

export const ResultListItem = ({ id, playerName, score }) => {
  return (
    <Stack key={id} direction="row" spacing={2}>
      <Card sx={{ flex: 4, p: 1 }}>
        <Typography sx={{ lineHeight: 1.6 }}>
          {playerName} - {score}
        </Typography>
      </Card>
      <IconButton
        size="small"
        children={<img src={Icons.trashIcon} alt="Delete Icon" />}
        sx={{
          width: '48px',
          height: '100%',
          backgroundColor: 'red',
          flex: 1,
          p: 1,
          borderRadius: 2,
        }}
        onClick={() => deleteButtonHandler(id)}
      />
    </Stack>
  );
};
