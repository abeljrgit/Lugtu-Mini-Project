import React from 'react';
import { Button, Stack } from '@mui/material';

export const Links = () => {
  return (
    <Stack
      direction="row"
      sx={{ height: '100%', alignItems: 'stretch' }}
      spacing={2}
    >
      <Button variant="text" sx={{ fontSize: '16px', color: 'white' }} href="/">
        Dashboard
      </Button>
      <Button
        variant="text"
        sx={{ fontSize: '16px', color: 'white' }}
        href="/player"
      >
        Popular Player
      </Button>
      <Button
        variant="text"
        sx={{ fontSize: '16px', color: 'white' }}
        href="/contact-us"
      >
        Contact Us
      </Button>
      <Button
        variant="text"
        sx={{ fontSize: '16px', color: 'white' }}
        href="/about-us"
      >
        About Us
      </Button>
      <Button
        variant="text"
        sx={{ fontSize: '16px', color: 'white' }}
        href="/score"
      >
        Score
      </Button>
    </Stack>
  );
};
