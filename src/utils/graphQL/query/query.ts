
import { Fetch } from '../fetch';
import { getAuthor, getLatestPosts, getUser, postsByCat, searchPosts, singlePostBySlug } from './queries';
import { AuthorData, AuthorState, CatState, PostState, SearchState, SinglePostData, SPost, SPState, UserProfileData, UserState } from './query-types';

export async function SearchQuery(state: SearchState): Promise<SPost[]> {
  const searchData = await Fetch(searchPosts(state.postNumber, state.query)); 
  return searchData.posts.nodes as SPost[]
}

export async function PostsQuery(state: PostState): Promise<SPost[]> {
  const postsData = await Fetch(getLatestPosts(state.postNumber));
  return postsData.posts.nodes as SPost[];
};


export async function TopicQuery(state: CatState): Promise<SPost[]> {
  const categoryData = await Fetch(postsByCat(state.postNumber, state.category));
  return categoryData.posts.nodes as SPost[]
}

export async function SinglePostQuery(state: SPState): Promise<SinglePostData> {
  const singlePostData = await Fetch(singlePostBySlug(state.slug));
  return singlePostData as SinglePostData;
}

export async function AuthorQuery(state: AuthorState): Promise<AuthorData> {
  const authorData = await Fetch(getAuthor(state.postNumber, state.slug));
  return authorData.user
}

export async function UserProfileQuery(state: UserState) {
  const userData = await Fetch(getUser(state.commentNumber, state.slug))
  console.log(userData)
}


