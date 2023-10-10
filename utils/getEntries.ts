import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

const client = getClient();

export const getEntries = async () => {
  const query = gql`
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
      }
    }
  `;
  const { data } = await client.query({
    query,
  });

  return data.entriesConnection.edges;
};
