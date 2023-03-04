import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';

import Dashboard from './modules/Dashboard/containers/Dashboard';
import NavBar from './modules/NavBar/containers/NavBar';
import BackgroundVideo from './modules/BackgroundVideo/containers/BackgroundVideo';
import PopularPlayer from './modules/PopularPlayer/containers/PopularPlayer';
import ContactUs from './modules/ContactUs/containers/ContactUs';
import AboutUs from './modules/AboutUs/containers/AboutUs';
import Score from './modules/Score/containers/Score';

export default class App extends Component {
  theme = createTheme({
    typography: {
      fontFamily: ['Poppins'].join(','),
    },
    primary: {
      main: '#FD6711',
    },
  });

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={this.theme}>
          <NavBar />
          <BackgroundVideo />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/player" element={<PopularPlayer />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/score" element={<Score />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
