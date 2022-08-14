export const getLatestPosts = `query getPosts {
    posts(first: 10) {
      nodes {
        guid
        title
        slug
        date
        excerpt
        author {
          node {
            name
            id
            avatar {
              url
              width
              height
            }
            slug
          }
        }
        featuredImage {
          node {
            mediaItemUrl
            altText
            mediaDetails {
              height
              width
            }
          }
        }
        categories {
          nodes {
            name
            categoryId
            uri
          }
        }
      }
    }
  }`;
