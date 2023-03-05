import { Card, Typography } from '@mui/material';
import React from 'react';

export const LocationCard = () => {
  return (
    <Card
      sx={{
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        mb: 2,
        backgroundColor: '#0F6292',
        color: '#FFFFFF',
        '@media (max-width: 768px)': {
          mb: 0,
          mr: 2,
          flex: 1,
        },
      }}
    >
      <Typography variant="h5" sx={{ lineHeight: 1 }}>
        GECO Asia Pte. Ltd.
      </Typography>
      <Typography variant="body2" sx={{ fontSize: 12, mt: 1 }}>
        2 Venture Drive, #10-18 Vision Exchange, Singapore 608526
      </Typography>
    </Card>
  );
};
