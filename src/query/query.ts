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

export async function SearchQuery(searchTerm: string): Promise<SearchResult[]> {
  const searchData = await Query(searchPosts(searchTerm)); 
  
  return searchData.posts.edges as SearchResult[]
}

type PostInfo = {
  postNumber: number;
}

export async function PostsQuery(state: PostInfo): Promise<SinglePost[]> {
  console.log(state)
  const postsData = await Query(getLatestPosts(state.postNumber));

  console.log(state);

  return postsData.posts.nodes as SinglePost[];
};

type CatInfo = {
  postNumber: number,
  category: string
}

export async function TopicQuery(state: CatInfo): Promise<SinglePost[]> {
  const categoryData = await Query(postsByCat(state.postNumber, state.category))

  console.log(categoryData.posts.nodes)
  return categoryData.posts.nodes as SinglePost[]
}




