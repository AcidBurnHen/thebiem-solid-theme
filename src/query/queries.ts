const PostQueryTemplate = `nodes {
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
