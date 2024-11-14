import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';

const client = getClient();

export const getAbouts = async () => {
  const query = gql`
    query About {
      aboutsConnection {
        edges {
          node {
            englishHeaderFour
            englishHeaderOne
            englishHeaderThree
            englishHeaderTwo
            englishParagraphOne {
              text
            }
            englishParagraphTwo {
              text
            }
            id
            imageThree {
              url
            }
            imageOne {
              url
            }
            imageTwo {
              url
            }
            spanishHeaderFour
            spanishHeaderOne
            spanishHeaderThree
            spanishHeaderTwo
            spanishParagraphOne {
              text
            }
            spanishParagraphTwo {
              text
            }
          }
        }
      }
    }
  `;
  const { data } = await client.query({
    query,
    context: {
      fetchOptions: {
        next: {
          revalidate: 3600,
        },
      },
    },
  });

  return data.aboutsConnection.edges;
};
