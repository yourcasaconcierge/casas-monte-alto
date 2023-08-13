import { NextResponse } from 'next/server';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string,
  cache: new InMemoryCache(),
});

export async function GET(req: Request) {
  const { data } = await client.query({
    query: gql`
      query Properties {
        propertiesConnection {
          edges {
            node {
              id
              propertyName
              publishedAt
              slug
              description {
                text
              }
              features {
                text
              }
              amenities {
                text
              }
              images {
                id
                url
                height
                width
              }
              bathrooms
              bedrooms
            }
          }
        }
      }
    `,
  });

  const properties = data.propertiesConnection.edges;
  return NextResponse.json({
    message: 'Hello from /api/properties',
    properties,
  });
}
