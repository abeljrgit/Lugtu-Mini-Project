import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import { Icons } from '../../../assets';

export const ContactUsCard = () => {
  return (
    <Card
      sx={{
        // flex: 1,
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        backgroundColor: '#0F6292',
        color: '#FFFFFF',
      }}
    >
      <Typography variant="h5" sx={{ lineHeight: 1, mb: 2 }}>
        Contact Us
      </Typography>
      <Button
        href="tel:6565603224"
        rel="nofollow"
        type="text"
        sx={{
          color: 'white',
          textAlign: 'left',
          alignSelf: 'flex-start',
          p: 0,
        }}
      >
        +65 6560 3224
      </Button>
      <Button
        className="link-style-white"
        href="mailto:info@geco.asia"
        rel="nofollow"
        sx={{
          color: 'white',
          textAlign: 'left',
          alignSelf: 'flex-start',
          p: 0,
        }}
      >
        info@geco.asia
      </Button>
      <Box
        sx={{
          width: '100%',
          mt: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <a
          href="https://www.facebook.com/gecoasia/"
          target="_blank"
          rel="nofollow"
        >
          <img src={Icons.facebookLogo} alt="Facebook Logo" />
        </a>
        <a
          href="https://www.linkedin.com/company/gecoasia/"
          target="_blank"
          rel="nofollow"
        >
          <img src={Icons.linkedinLogo} alt="Linkedin Logo" />
        </a>
        <a href="https://twitter.com/GECO_Asia" target="_blank" rel="nofollow">
          <img src={Icons.twitterLogo} alt="Twitter Logo" />
        </a>
        <a
          href="https://www.instagram.com/gecoasia/"
          target="_blank"
          rel="nofollow"
        >
          <img src={Icons.instagramLogo} alt="Instagram Logo" />
        </a>
      </Box>
    </Card>
  );
};
