import { gql } from '@apollo/client';

export const query = gql`
  query properties {
    propertiesConnection {
      edges {
        node {
          id
          propertyName
          publishedAt
          slug
          englishDescription {
            text
          }
          spanishDescription {
            text
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
