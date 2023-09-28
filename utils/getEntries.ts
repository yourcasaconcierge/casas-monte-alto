import { gql } from '@apollo/client';

export const query = gql`
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
