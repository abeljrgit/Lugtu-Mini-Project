import { Box } from '@mui/material';
import React from 'react';
import { Videos } from '../../../assets';

const BackgroundVideo = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <video
        autoPlay={true}
        loop
        muted
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <source src={Videos.basketballVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#0000002A',
        }}
      />
    </Box>
  );
};
export default BackgroundVideo;
