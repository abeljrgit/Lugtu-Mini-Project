import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../../../services/action';
import { Box, Card, Stack, Typography } from '@mui/material';

import { ResultLineChart, ResultList } from '../components';

class Score extends Component {
  render() {
    return (
      <section>
        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '700px',
            height: '400px',
            backgroundColor: 'transparent',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#F7F1E5',
              backgroundPosition: 'center',
              opacity: 0.8,
              zIndex: -1,
              display: 'flex',
            }}
          >
            <ResultList />
            <ResultLineChart />
          </Box>
        </Card>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { playerData: state.playerData };
};

export default connect(mapStateToProps, null)(Score);
