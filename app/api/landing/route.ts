import { NextResponse } from 'next/server';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
  cache: new InMemoryCache(),
});

export async function GET(req: Request) {
  const { data } = await client.query({
    query: gql`
      query Landing {
        headerImagesConnection {
          edges {
            node {
              image {
                url
                width
                height
              }
            }
          }
        }
        footerImagesConnection {
          edges {
            node {
              image {
                height
                width
                url
              }
            }
          }
        }
      }
    `,
  });
  const headerImages = data.headerImagesConnection.edges;
  const footerImages = data.footerImagesConnection.edges;
  return NextResponse.json({
    headerImages,
    footerImages,
  });
}
