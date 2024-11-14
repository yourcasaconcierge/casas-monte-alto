import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

const client = getClient();

export const getProperty = async (slug: string) => {
  try {
    const query = gql`
      query property($slug: String!) {
        property(where: { slug: $slug }) {
          englishFeatures {
            text
          }
          images {
            id
            width
            height
            url
          }
          englishDescription {
            markdown
          }
          englishAmenities {
            text
          }
          spanishAmenities {
            text
          }
          spanishFeatures {
            text
          }
          propertyName
          id
          postingLink
          slug
          bathrooms
          bedrooms
          featuresAndAmenitiesLink
          publishedAt
        }
      }
    `;

    // Execute query with variable
    const { data } = await client.query({
      query,
      variables: { slug },
    });

    // console.log('Result:', data); // Log the result data

    return data.property;
  } catch (error) {
    console.error('Error occurred during GraphQL query:', error);
    throw error;
  }
};
