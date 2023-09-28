import { gql } from '@apollo/client';

export const query = gql`
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
