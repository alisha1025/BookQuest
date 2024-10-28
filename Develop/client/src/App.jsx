import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './AppRouter'; 

const client = new ApolloClient({
  uri: '/graphql', 
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <AppRouter />
    </Router>
  </ApolloProvider>
);

export default App;
