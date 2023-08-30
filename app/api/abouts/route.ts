import { NextResponse } from 'next/server';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
  cache: new InMemoryCache(),
});

export async function GET(req: Request) {
  const { data } = await client.query({
    query: gql`
      query About {
        aboutsConnection {
          edges {
            node {
              englishHeaderFour
              englishHeaderOne
              englishHeaderThree
              englishHeaderTwo
              englishParagraphOne {
                text
              }
              englishParagraphTwo {
                text
              }
              id
              imageThree {
                url
              }
              imageOne {
                url
              }
              imageTwo {
                url
              }
              spanishHeaderFour
              spanishHeaderOne
              spanishHeaderThree
              spanishHeaderTwo
              spanishParagraphOne {
                text
              }
              spanishParagraphTwo {
                text
              }
            }
          }
        }
      }
    `,
  });

  const abouts = data.aboutsConnection.edges;
  return NextResponse.json({
    message: 'Hello from /api/about',
    abouts,
  });
}
