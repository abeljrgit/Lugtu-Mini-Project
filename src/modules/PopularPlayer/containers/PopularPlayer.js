import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPopularPlayers } from '../../../services/action';
import { Box, Button, Card, Typography } from '@mui/material';

class PopularPlayer extends Component {
  onButtonClickHandler = () => {
    this.props.getPlayers();
  };

  componentDidMount = () => {
    // this.props.getPlayers();
  };

  render() {
    console.log(this.props.popularPlayers);
    return (
      <Box component="section" sx={{ width: '100%', height: '100%' }}>
        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            backgroundColor: 'transparent',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#F7F1E5',
              backgroundPosition: 'center',
              opacity: 0.8,
              zIndex: -1,
              display: 'flex',
              flexDirection: 'column',
              p: 4,
            }}
          >
            <Typography>List of Popular Players</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {this.props.popularPlayers ? (
                this.props.popularPlayers.slice(0, 10).map((data) => {
                  return (
                    <Card
                      key={data.id}
                      sx={{ width: '96px', height: '96px', m: 2, p: 2 }}
                    >
                      <Typography>{data.firstname}</Typography>
                      <Typography>{data.lastname}</Typography>
                    </Card>
                  );
                })
              ) : (
                <Typography>No Data</Typography>
              )}
            </Box>
          </Box>
        </Card>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return { popularPlayers: state.popularPlayers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: () => dispatch(getPopularPlayers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopularPlayer);
