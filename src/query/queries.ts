export function getLatestPosts(posts: number): string {
  return `query getLatestPosts {
    posts(first: ${posts}) {
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
}

export function searchPosts(searchTerm: string): string {
  console.log(searchTerm)

  return `
  query searchPosts {
    posts(where: {search: "${searchTerm}" }, first: 10) {
      edges {
        node {
          title
        }
      }
    }
  }
  `;
}
