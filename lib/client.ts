import {
  HttpLink,
  InMemoryCache,
  ApolloClient,
  DefaultOptions,
} from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
};

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
    }),
    cache: new InMemoryCache(),
    defaultOptions,
  });
});
