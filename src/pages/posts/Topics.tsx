import { useParams } from '@solidjs/router';
import { createResource, createSignal } from 'solid-js';
import { TopicQuery } from '../../utils/graphQL/query/query';
import Post from '../../components/post/Post';

function Topics() {
  const params = useParams();

  const [state, setState] = createSignal({
    category: params.category,
    postNumber: 10,
  });

  const [categoryPosts] = createResource(state, TopicQuery);

  return <Post postData={categoryPosts} state={state()} setState={setState} />;
}

export default Topics;
