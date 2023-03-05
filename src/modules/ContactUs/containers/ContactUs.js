import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../../../services/action';
import { Box, Card } from '@mui/material';
import { ContactUsCard, LocationCard } from '../components';

export default class ContactUs extends Component {
  render() {
    return (
      <Box
        component="section"
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mr: 2,
              '@media (max-width: 768px)': {
                flexDirection: 'row',
                mr: 0,
                mb: 2,
              },
            }}
          >
            <LocationCard />
            <ContactUsCard />
          </Box>
          <Card
            sx={{
              width: '600px',
              height: '328px',
              '@media (max-width: 768px)': {
                width: '100%',
              },
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.974531086127!2d103.744732!3d1.3298784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da107545d59779%3A0x4773c1ad3d295634!2sGECO%20Asia%20Pte.%20Ltd.!5e0!3m2!1sen!2sph!4v1677147418090!5m2!1sen!2sph"
              className="google-map"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </Box>
      </Box>
    );
  }
}
