import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { BrowserRouter } from 'react-router-dom';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      alert(`GraphQL error: ${message}`)
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    //fetchOptions: {
    //  mode: 'no-cors',
    //},
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
);
