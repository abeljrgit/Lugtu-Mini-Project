import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../../../services/action';
import Carousel from 'react-material-ui-carousel';
import { Images } from '../../../assets';
import { Box, Card } from '@mui/material';

export default class AboutUs extends Component {
  render() {
    return (
      <Box component="section" sx={{ width: '100%', height: '100%' }}>
        <Box
          sx={{
            width: '500px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            backgroundColor: 'transparent',
          }}
        >
          <Carousel sx={{ width: '100%' }} animation="slide" height="300px">
            <Box sx={{ width: '100%', height: '100%' }}>
              <img
                src={Images.carouselImage1}
                alt="Carousel Image 1"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box sx={{ width: '100%', height: '100%' }}>
              <iframe
                style={{ width: '100%', height: '100%', display: 'block' }}
                src="https://www.youtube.com/embed/ob702b9PXvw"
                title="LeBron James Drops SEASON-HIGH 47 PTS On His Birthday | December 30, 2022"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </Box>
            <Box sx={{ width: '100%', height: '100%' }}>
              <img
                src={Images.carouselImage3}
                alt="Carousel Image 3"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box sx={{ width: '100%', height: '100%' }}>
              <img
                src={Images.carouselImage4}
                alt="Carousel Image 4"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box sx={{ width: '100%', height: '100%' }}>
              <img
                src={Images.carouselImage5}
                alt="Carousel Image 5"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Box sx={{ width: '100%', height: '100%' }}>
              <img
                src={Images.carouselImage6}
                alt="Carousel Image 6"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
          </Carousel>
        </Box>
      </Box>
    );
  }
}
