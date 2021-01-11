import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from './services/apollo';
import Routes from './containers';
import './App.css';

const App = () => (
  <ApolloProvider client={ApolloClient}>
    <Routes />
  </ApolloProvider>
);

export default App;
