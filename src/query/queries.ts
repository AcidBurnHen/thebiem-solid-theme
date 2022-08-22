const PostQueryTemplate = `nodes {
  title
  slug
  date
  excerpt
  author {
    node {
      name
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
}`;

export function getLatestPosts(posts: number): string {
  return `query getLatestPosts {
    posts(first: ${posts}) {
      ${PostQueryTemplate}
  }`;
}

export function searchPosts(posts: number, searchTerm: string): string {
  return `
  query searchPosts {
    posts(where: {search: "${searchTerm}" }, first: ${posts})  {
      ${PostQueryTemplate}
  }
  `;
}

export function postsByCat(posts: number, category: string): string {
  return `query postsByCat {
    posts(where: {categoryName: "${category}"}, first: ${posts}) {
      ${PostQueryTemplate}
  }`;
}

export function singlePostBySlug(slug: string): string {
  return `query singlePostBySlug {
    postBy(slug: "${slug}") {
        content(format: RENDERED)
        title
        featuredImage {
          node {
            mediaItemUrl
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            avatar {
              url
              width
              height
            }
            name
            slug
          }
        }
      }
  }`
}

export function getAuthor(posts: number, slug: string): string {
  return `
  query getAuthor {
    user(id: "${slug}", idType: SLUG) {
      avatar {
        url
      }
      name
      description
      posts(first: ${posts}) {
        nodes {
          title
          featuredImage {
            node {
              mediaDetails {
                height
                width
              }
              mediaItemUrl
            }
          }
        }
      }
    }
  }
  `
}
