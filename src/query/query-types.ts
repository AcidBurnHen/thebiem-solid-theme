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
