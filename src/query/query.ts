import { getAuthor, getLatestPosts, postsByCat, searchPosts, singlePostBySlug } from './queries';
import { AuthorData, AuthorState, CatState, PostState, SearchState, SinglePost, SPost, SPState } from './query-types';

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

export async function SearchQuery(state: SearchState): Promise<SPost[]> {
  const searchData = await Query(searchPosts(state.postNumber, state.query)); 
  return searchData.posts.nodes as SPost[]
}


export async function PostsQuery(state: PostState): Promise<SPost[]> {
  const postsData = await Query(getLatestPosts(state.postNumber));
  return postsData.posts.nodes as SPost[];
};


export async function TopicQuery(state: CatState): Promise<SPost[]> {
  const categoryData = await Query(postsByCat(state.postNumber, state.category));
  return categoryData.posts.nodes as SPost[]
}

export async function SinglePostQuery(state: SPState): Promise<SinglePost> {
  const singlePostData = await Query(singlePostBySlug(state.slug));
  return singlePostData as SinglePost;
}

export async function AuthorQuery(state: AuthorState): Promise<AuthorData> {
  const authorData = await Query(getAuthor(state.postNumber, state.slug));

  return authorData.user
}


