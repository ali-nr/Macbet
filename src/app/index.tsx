/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { CssBaseline } from '@mui/material';
import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { LoginScreen } from './screens/Login/LoginScreen';
import { NotFoundScreen } from './screens/NotFound/NotFoundScreen';

export function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
