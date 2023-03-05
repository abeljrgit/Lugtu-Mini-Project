import { Card } from '@mui/material';
import React from 'react';

export const GoogleMapLocation = () => {
  return (
    <Card
      sx={{
        flex: 2,
        '@media (max-width: 768px)': {
          width: '100%',
          height: '300px',
          flex: 'unset',
          minHeight: '200px',
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
  );
};
