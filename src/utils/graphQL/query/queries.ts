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
        databaseId
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
  }`;
}

function getUserData(slug: string, query: string) {
  return `
  query getAuthor {
    user(id: "${slug}", idType: SLUG) {
      avatar {
        url
      }
      name
      description
      slug
      ${query}
    }
  }
  `
}

export function getUser(comments: number, slug: string): string {
  const query = `comments(first: ${comments}) {
      nodes {
      commentedOn {
        node {
          slug
          ... on Post {
            title
          }
        }
      }
      content(format: RENDERED)
      date
    }
  }
  `
  return getUserData(slug, query)
}

export function getAuthor(posts: number, slug: string): string {
  const query = `posts(first: ${posts}) {
    nodes {
      title
      slug
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
  }`

  return getUserData(slug, query)
}
