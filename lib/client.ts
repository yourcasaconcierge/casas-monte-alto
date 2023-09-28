import { HttpLink } from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
      fetchOptions: {
        cache: 'no-store',
      },
    }),
    cache: new NextSSRInMemoryCache(),
  });
});
