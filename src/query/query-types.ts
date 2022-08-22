type author = {
  node: {
    avatar: {
      url: string;
      width: number;
      height: number;
    };
    name: string;
    slug: string;
  };
};

type categoryNode = {
  name: string;
  categoryId: number;
  uri: string;
};
type categories = { nodes: categoryNode[] };

type featuredImage = {
  node: {
    mediaItemUrl: string;
    mediaDetails: {
      height: number;
      width: number;
    };
  };
};

export interface SPost {
  author: author;
  categories?: categories;
  date: string;
  excerpt: string;
  featuredImage: featuredImage;
  slug: string;
  title: string;
}

export interface SinglePost {
  postBy: {
    author: author;
    content: string;
    featuredImage: featuredImage;
    title: string;
  };
}

type AuthorPosts = {
  title: string,
  featuredImage: featuredImage
}

export interface AuthorData {
  avatar: {
    url: string,
  },
  name: string,
  description: string,
  posts: {
    nodes: AuthorPosts[]
  }
}

/* State types */

export type SearchState = {
  postNumber: number;
  query: string;
}

export type PostState = {
  postNumber: number;
}

export type SPState = {
  slug: string
}

export type AuthorState = {
  slug: string,
  postNumber: number
}

export type CatState = {
  postNumber: number,
  category: string
}
