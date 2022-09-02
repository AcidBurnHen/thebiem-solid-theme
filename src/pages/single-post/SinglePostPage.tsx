import { useParams } from '@solidjs/router';
import { SinglePostQuery } from "../../utils/graphQL/query/query";
import { createResource, createSignal, Show } from 'solid-js';
import { SinglePost } from '../../components/single-post/SinglePost';
import { createToC } from '../../components/single-post/createToC';

export function SinglePostPage() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.post,
  });

  const [postData] = createResource(state, SinglePostQuery);

  // Add show/hide button to table of contents
  createToC(postData)

  return (
    <SinglePost postData={postData} />
  )
}
