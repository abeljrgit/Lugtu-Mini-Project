import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { onDeletePlayerAndScore } from '../../../services/action';
import { ResultListItem } from './ResultListItem';

export const ResultList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const playerData = useSelector((state) => state.playerData);
  const dispatch = useDispatch();
  const deleteButtonHandler = (id) => {
    dispatch(onDeletePlayerAndScore(id));
  };

  const finalResult = (queryString, playerDataValue) => {
    const pattern = new RegExp(queryString?.toLowerCase(), 'gi');
    const filteredValuesArr =
      playerDataValue.length !== 0
        ? playerDataValue.filter((data) =>
            pattern.test(data?.playerName?.toLowerCase())
          )
        : [];

    if (queryString === '') {
      return playerDataValue.map((data) => (
        <ResultListItem
          id={data.id}
          playerName={data.playerName}
          score={data.score}
          deleteButton={deleteButtonHandler}
        />
      ));
    } else if (queryString !== '' && filteredValuesArr.length !== 0) {
      return filteredValuesArr.map((data) => (
        <ResultListItem
          id={data.id}
          playerName={data.playerName}
          score={data.score}
          deleteButton={deleteButtonHandler}
        />
      ));
    } else if (queryString !== '' && filteredValuesArr.length === 0) {
      return <Typography>No Data.</Typography>;
    } else {
      return <Typography>No Data.</Typography>;
    }
  };

  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <TextField
        label="Search here."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <Typography>{`You are searching for: ${searchQuery}`}</Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Score Result:
      </Typography>
      <Stack direction="column" spacing={1}>
        {finalResult(searchQuery, playerData)}
      </Stack>
    </Box>
  );
};
