import { getLatestPosts, searchPosts } from './queries';
import { Post, SearchResult } from './query-types';

async function Query(queryType: string): Promise<any> {
  const endpoint = 'https://thebiem.com/graphql';

  const response = await fetch(endpoint, {
    method: 'POST',
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

export async function PostsQuery(posts: number): Promise<Post[]> {
  const postsData = await Query(getLatestPosts(posts));

  return postsData.posts.nodes as Post[];
};




