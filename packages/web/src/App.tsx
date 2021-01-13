import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, TradulabTheme } from './services';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from './containers';

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <ThemeProvider theme={TradulabTheme}>
      <Routes />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
