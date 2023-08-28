import { NextResponse } from 'next/server';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
  cache: new InMemoryCache(),
});
export async function GET(req: Request) {
  const { data } = await client.query({
    query: gql`
      query Entry {
        entriesConnection {
          edges {
            node {
              englishExcerpt
              englishSubtitle
              englishTitle
              featuredImage {
                url
              }
              slug
              spanishExcerpt
              spanishSubtitle
              spanishTitle
              spanishContent {
                markdown
              }
              englishContent {
                markdown
              }
              publishedAt
              createdAt
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
