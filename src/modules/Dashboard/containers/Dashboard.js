import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../../../services/action';
import { Box, Card, Container } from '@mui/material';
import { Videos } from '../../../assets';
import { PlayerForm } from '../components/PlayerForm';

export default class Dashboard extends Component {
  render() {
    return (
      <Box component="section">
        <PlayerForm />
      </Box>
    );
  }
}
