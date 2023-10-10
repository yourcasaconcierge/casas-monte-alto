import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

const client = getClient();

export const getProperties = async () => {
  const query = gql`
    query properties {
      propertiesConnection {
        edges {
          node {
            id
            propertyName
            publishedAt
            slug
            englishDescription {
              markdown
            }
            spanishDescription {
              markdown
            }
            englishFeatures {
              text
            }
            spanishFeatures {
              text
            }
            images {
              id
              url
              width
              height
            }
            bathrooms
            bedrooms
            postingLink
            featuresAndAmenitiesLink
            englishAmenities {
              text
            }
            spanishAmenities {
              text
            }
          }
        }
      }
    }
  `;
  const { data } = await client.query({
    query,
  });

  return data.propertiesConnection.edges;
};
