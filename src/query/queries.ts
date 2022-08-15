export function getLatestPosts(posts: number): string {
  return `query getPosts {
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
  }`
} 
