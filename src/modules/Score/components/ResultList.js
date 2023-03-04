import { Box, Card, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icons } from '../../../assets';
import { onDeletePlayerAndScore } from '../../../services/action';

export const ResultList = () => {
  const playerData = useSelector((state) => state.playerData);
  const dispatch = useDispatch();
  const deleteButtonHandler = (id) => {
    dispatch(onDeletePlayerAndScore(id));
  };

  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Score Result:
      </Typography>
      <Stack direction="column" spacing={1}>
        {playerData.length ? (
          playerData.map((data) => {
            return (
              <Stack key={data.id} direction="row" spacing={2}>
                <Card sx={{ flex: 4, p: 1 }}>
                  <Typography sx={{ lineHeight: 1.6 }}>
                    {data.playerName} - {data.score}
                  </Typography>
                </Card>
                <IconButton
                  size="small"
                  children={<img src={Icons.trashIcon} alt="Delete Icon" />}
                  sx={{
                    width: '48px',
                    height: '100%',
                    backgroundColor: 'red',
                    flex: 1,
                    p: 1,
                    borderRadius: 2,
                  }}
                  onClick={() => deleteButtonHandler(data.id)}
                />
              </Stack>
            );
          })
        ) : (
          <Typography>No Data.</Typography>
        )}
      </Stack>
    </Box>
  );
};
