import { useParams } from '@solidjs/router';
import { createMemo, createResource, createSignal } from 'solid-js';
import { TopicQuery } from '../../query/query';
import { Post } from './Post';

export function Topics() {
  const params = useParams();

  const [state, setState] = createSignal({
    category: params.category,
    postNumber: 10,
  });

  const [categoryPosts] = createResource(state, TopicQuery);

  return <Post postData={categoryPosts} state={state()} setState={setState} />;
}
