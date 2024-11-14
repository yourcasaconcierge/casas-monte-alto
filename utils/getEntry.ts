import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

const client = getClient();

export const getEntry = async (slug: string) => {
  try {
    const query = gql`
      query entry($slug: String!) {
        entry(where: { slug: $slug }) {
          englishExcerpt
          englishSubtitle
          englishTitle
          featuredImage {
            url
          }
          publishedAt
          slug
          spanishExcerpt
          spanishSubtitle
          spanishTitle
          spanishContent {
            markdown
          }
          createdAt
          englishContent {
            markdown
          }
        }
      }
    `;

    // Execute query with variable
    const { data } = await client.query({
      query,
      variables: { slug },
    });

    // console.log('Result:', data); // Log the result data

    return data.entry;
  } catch (error) {
    console.error('Error occurred during GraphQL query:', error);
    throw error;
  }
};
