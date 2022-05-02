/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// Import root app
import { App } from 'app/App';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as ReactDOM from 'react-dom';

const client = new ApolloClient({
  uri: '/server/graphql',
  cache: new InMemoryCache(),
});

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#F4F4F4' },
        }}
      />
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  MOUNT_NODE,
);
