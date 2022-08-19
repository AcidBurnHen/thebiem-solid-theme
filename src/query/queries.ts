export function getLatestPosts(posts: number): string {
  return `query getLatestPosts {
    posts(first: ${posts}) {
      nodes {
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
    posts(where: {search: "${searchTerm}" }, first: 10)  {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }
  }
  `;
}

export function postsByCat(posts: number, category: string): string {
  return `query postsByCat {
    posts(where: {categoryName: "${category}"}, first: ${posts}) {
      nodes {
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
  }`
}
