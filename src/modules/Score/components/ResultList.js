import {
  Box,
  Card,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../../assets';
import { onDeletePlayerAndScore } from '../../../services/action';
import { ResultListItem } from './ResultListItem';

export const ResultList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const playerData = useSelector((state) => state.playerData);
  const dispatch = useDispatch();
  const deleteButtonHandler = (id) => {
    dispatch(onDeletePlayerAndScore(id));
  };

  const queryResult = (queryString) => {
    const pattern = new RegExp(queryString?.toLowerCase(), 'gi');
    const filteredValuesArr = playerData.filter((data) =>
      pattern.test(data?.playerName?.toLowerCase())
    );

    if (queryString.length) {
      setSearchResult([...filteredValuesArr]);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <TextField
        label="Search here."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          queryResult(e.target.value);
        }}
      />
      <Typography>{`You are searching for: ${searchQuery}`}</Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Score Result:
      </Typography>
      <Stack direction="column" spacing={1}>
        {searchQuery === '' &&
          playerData.map((data) => (
            <ResultListItem
              id={data.id}
              playerName={data.playerName}
              score={data.score}
            />
          ))}
        {searchQuery !== '' &&
          searchResult.length !== 0 &&
          searchResult.map((data) => (
            <ResultListItem
              id={data.id}
              playerName={data.playerName}
              score={data.score}
            />
          ))}
        {searchQuery !== '' && searchResult.length === 0 && (
          <Typography>No Data.</Typography>
        )}
      </Stack>
    </Box>
  );
};
