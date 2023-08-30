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
              bathrooms
              bedrooms
              createdAt
              id
              slug
              englishAmenities {
                text
              }
              englishDescription {
                text
              }
              englishFeatures {
                text
              }
              propertyName
              spanishAmenities {
                text
              }
              spanishDescription {
                text
              }
              spanishFeatures {
                text
              }
              images {
                url
              }
              featuresAndAmenitiesLink
              postingLink
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
