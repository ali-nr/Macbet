import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React from 'react';
import { RaceSelectionBox } from '../../components/RaceSelectionBox';

export const RaceSelectionScreen = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Grid
      container
      item
      xs={12}
      sm={8}
      md={4}
      marginTop={5}
      flexDirection="column"
      alignItems="stretch"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h5" gutterBottom component="div">
          State Selection
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="State"
            onChange={handleChange}
          >
            <MenuItem value="NSW">New South Wales</MenuItem>
            <MenuItem value="QLD">Queensland</MenuItem>
            <MenuItem value="SA">South Australia</MenuItem>
            <MenuItem value="TAS"> Tasmania</MenuItem>
            <MenuItem value="VIC">Victoria</MenuItem>
            <MenuItem value="WA">Western Australia</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box display="flex" flexDirection="column" flexGrow={1} marginTop={5}>
        <Typography variant="h5" gutterBottom component="div">
          Race Selection
        </Typography>
        <RaceSelectionBox />
      </Box>
    </Grid>
  );
};
