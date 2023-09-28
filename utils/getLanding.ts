import { gql } from '@apollo/client';

export const query = gql`
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
`;
