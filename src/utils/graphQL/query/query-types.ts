/* Post types */

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

export interface SinglePostData {
  postBy: {
    author: author;
    databaseId: number;
    content: string;
    featuredImage: featuredImage;
    title: string;
  };
}


/* User types */

interface UserData {
  avatar: {
    url: string,
  },
  name: string,
  description: string,
  slug: string,
}

export type AuthorPostsData = {
  title: string,
  slug: string,
  featuredImage: featuredImage
}

export interface AuthorData extends UserData {
  posts: {
    nodes: AuthorPostsData[]
  }
}

export type UserComment = {
  commentedOn: {
    node: {
      slug: string
      title: string
    }
  }
  content: string
  date: string
}

export interface UserProfileData extends UserData {
  comments: {
    nodes: UserComment[]
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

export type UserState = {
  slug: string,
  postNumber: number
}

export type CatState = {
  postNumber: number,
  category: string
}
