import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export const ResultList = () => {
  const playerData = useSelector((state) => state.playerData);

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
                <Card sx={{ flex: 5, p: 1 }}>
                  <Typography sx={{ lineHeight: 1.6 }}>
                    {data.playerName}
                  </Typography>
                </Card>
                <Card sx={{ flex: 1, p: 1 }}>
                  <Typography sx={{ lineHeight: 1.6, textAlign: 'center' }}>
                    {data.score}
                  </Typography>
                </Card>
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
