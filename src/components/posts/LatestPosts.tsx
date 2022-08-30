import {PostsQuery} from '../../utils/graphQL/query/query';
import { createResource, createSignal, For, Show } from 'solid-js';

import { Post } from './Post';

export function LatestPosts() {
  const [state, setState] = createSignal({
    postNumber: 10
  })

  const [postsData] = createResource(state, PostsQuery);

  return (
    <Post postData={postsData} state={state()} setState={setState}/> 
  );
}
