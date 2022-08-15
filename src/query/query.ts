import { getLatestPosts } from './queries';
import { Post } from './query-types';

async function Query(posts: number): Promise<Post[]> {
  const endpoint = 'https://thebiem.com/graphql';

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getLatestPosts(posts),
    }),
  })
  
  const results = await response.json();
  const postsData = results.data.posts.nodes as Post[]

  return postsData;
};


export default Query;
