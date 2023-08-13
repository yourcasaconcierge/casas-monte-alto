import { NextResponse } from 'next/server';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
  cache: new InMemoryCache(),
});
export async function GET(req: Request) {
  const { data } = await client.query({
    query: gql`
      query Entries {
        entriesConnection {
          edges {
            node {
              title
              id
              slug
              createdAt
              excerpt
              publishedAt
              content {
                markdown
              }
              featuredImage {
                url
              }
              subtittle
            }
          }
        }
      }
    `,
  });

  const entries = data.entriesConnection.edges;

  return NextResponse.json({
    message: 'Hello from /api/test',
    entries,
  });
}
