import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export const SelectStateMessageBox = () => {
  return (
    <Box
      display="flex"
      flexGrow={1}
      paddingBottom={10}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          display: 'flex',
          justifyContent: 'center',
          m: 1,
          width: '100%',
          height: '100%',
          background: 'transparent',
        },
      }}
    >
      <Paper variant="outlined">
        <Box display="flex" alignItems="center">
          <Typography variant="body1" textAlign="center">
            Select state to load races
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
