/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { AppBar, Box, Button, Grid, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NotFoundScreen } from './screens/NotFound/NotFoundScreen';
import { RaceSelectionScreen } from './screens/RaceSelection/RaceSelectionScreen';

export function App() {
  const styles = {
    grid: {
      backgroundColor: '#FFFFFF',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      padding: 2,
    },
  };
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            textAlign="center"
          >
            Macbet
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" minHeight={900}>
        <Switch>
          <Route exact path="/" component={RaceSelectionScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
        <Grid
          container
          item
          xs={12}
          sm={8}
          md={4}
          position="fixed"
          height={60}
          bottom={0}
          justifyContent="center"
          sx={styles.grid}
        >
          <Box marginRight={2}>
            <Button variant="outlined" size="medium">
              Cancel
            </Button>
          </Box>
          <Box marginLeft={2}>
            <Button variant="outlined" size="medium">
              Continue
            </Button>
          </Box>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}
