<<<<<<< HEAD
import React from 'react';
import './App.css';
=======
import React from "react";
<<<<<<< HEAD
import "./App.css";
>>>>>>> routes

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

import CardProfileContainer from './CardProfileContainer';
import MyProjectsContainer from './MyProjectsContainer';

const uploadLink = createUploadLink({
  uri: 'http://localhost:3001/graphql',
  credentials: 'include',
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem('token');

  if (!['login', 'createUser'].includes(operation.operationName)) {
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  }

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CardProfileContainer />
        <MyProjectsContainer />
      </div>
    </ApolloProvider>
=======
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch></Switch>
    </Router>
>>>>>>> routes
  );
}

export default App;
