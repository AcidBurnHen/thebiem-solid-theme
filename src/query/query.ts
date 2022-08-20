import { Accessor } from 'solid-js';
import { getLatestPosts, postsByCat, searchPosts } from './queries';
import { SinglePost, SearchResult } from './query-types';

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

export async function SearchQuery(state: SearchInfo): Promise<SinglePost[]> {
  const searchData = await Query(searchPosts(state.postNumber, state.query)); 
  return searchData.posts.nodes as SinglePost[]
}

type PostInfo = {
  postNumber: number;
}

export async function PostsQuery(state: PostInfo): Promise<SinglePost[]> {
  const postsData = await Query(getLatestPosts(state.postNumber));
  return postsData.posts.nodes as SinglePost[];
};

type CatInfo = {
  postNumber: number,
  category: string
}

export async function TopicQuery(state: CatInfo): Promise<SinglePost[]> {
  const categoryData = await Query(postsByCat(state.postNumber, state.category));
  return categoryData.posts.nodes as SinglePost[]
}




