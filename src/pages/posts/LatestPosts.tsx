import { PostsQuery } from '../../utils/graphQL/query/query';
import { createResource, createSignal } from 'solid-js';

import Post from '../../components/post/Post';

function LatestPosts() {
  const [state, setState] = createSignal({
    postNumber: 10,
  });

  const [postsData] = createResource(state, PostsQuery);

  return <Post postData={postsData} state={state()} setState={setState} />;
}

export default LatestPosts;
