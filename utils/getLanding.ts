import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

const client = getClient();

export const getLandingImages = async () => {
  const query = gql`
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
  const { data } = await client.query({
    query,
  });
  const headerImage = data.headerImagesConnection.edges[0].node.image;
  const footerImage = data.footerImagesConnection.edges[0].node.image;

  return { headerImage, footerImage };
};
