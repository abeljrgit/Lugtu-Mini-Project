import React, { Component } from 'react';
import { Box, Card, TextField } from '@mui/material';
import { ContactForm, ContactUsCard, GoogleMapLocation } from '../components';

export default class ContactUs extends Component {
  render() {
    return (
      <Box
        component="section"
        sx={{
          minWidth: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          backgroundColor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            mr: 2,
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              mr: 0,
              mb: 2,
            },
          }}
        >
          <ContactUsCard />
          <GoogleMapLocation />
          <ContactForm />
        </Box>
      </Box>
    );
  }
}
