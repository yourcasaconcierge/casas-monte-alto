// import { Entry } from '@/types/EntryTypes';
// import { Property } from '@/types/PropertyTypes';
// import { request, gql } from 'graphql-request';

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;

// export const getEntries = async (): Promise<Entry[]> => {
//   const query = gql`
//     query Entries {
//       entriesConnection {
//         edges {
//           node {
//             title
//             id
//             slug
//             createdAt
//             excerpt
//             publishedAt
//             content {
//               markdown
//             }
//             featuredImage {
//               url
//             }
//             subtittle
//           }
//         }
//       }
//     }
//   `;

//   const result: { entriesConnection: { edges: Entry[] } } = await request(
//     graphqlAPI,
//     query
//   );
//   return result.entriesConnection.edges;
// };

// export const getProperties = async (): Promise<Property[]> => {
//   const query = gql`
//     query Properties {
//       propertiesConnection {
//         edges {
//           node {
//             id
//             propertyName
//             publishedAt
//             slug
//             description {
//               text
//             }
//             features {
//               text
//             }
//             amenities {
//               text
//             }
//             images {
//               id
//               url
//               height
//               width
//             }
//             bathrooms
//             bedrooms
//           }
//         }
//       }
//     }
//   `;

//   const result: { propertiesConnection: { edges: Property[] } } = await request(
//     graphqlAPI,
//     query
//   );
//   return result.propertiesConnection.edges;
// };
