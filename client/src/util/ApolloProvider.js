// This component wrapps the whole application, including the App component

import React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

import App from "../App";

// It points to the graphql server
const httpLink = createHttpLink({
  uri: "https://desolate-lowlands-73901.herokuapp.com/",
});

// Gets the token for the Auth Header
const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Uses the link to connect to the Apollo Server and creates a cache to store any cached data
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Exports an Apollo Provider Component that wraps the entire app
const ApolloProviderComponent = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default ApolloProviderComponent;
