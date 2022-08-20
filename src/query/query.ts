import { getLatestPosts, postsByCat, searchPosts, singlePostBySlug } from './queries';
import { SinglePost, SPost } from './query-types';

async function Query(queryType: string): Promise<any> {
  const endpoint = 'https://thebiem.com/graphql';

  const response = await fetch(endpoint, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: queryType,
    }),
  })  

  const results = await response.json();

  return results.data;
}

type SearchInfo = {
  postNumber: number;
  query: string;
}

export async function SearchQuery(state: SearchInfo): Promise<SPost[]> {
  const searchData = await Query(searchPosts(state.postNumber, state.query)); 
  return searchData.posts.nodes as SPost[]
}

type PostInfo = {
  postNumber: number;
}

export async function PostsQuery(state: PostInfo): Promise<SPost[]> {
  const postsData = await Query(getLatestPosts(state.postNumber));
  return postsData.posts.nodes as SPost[];
};

type CatInfo = {
  postNumber: number,
  category: string
}

export async function TopicQuery(state: CatInfo): Promise<SPost[]> {
  const categoryData = await Query(postsByCat(state.postNumber, state.category));
  return categoryData.posts.nodes as SPost[]
}

type SPInfo = {
  slug: string
}

export async function SinglePostQuery(state: SPInfo): Promise<SinglePost> {
  const singlePostData = await Query(singlePostBySlug(state.slug));
  return singlePostData as SinglePost;
}


