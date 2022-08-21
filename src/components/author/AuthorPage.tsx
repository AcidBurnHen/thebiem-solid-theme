import { useParams } from '@solidjs/router';
import { createEffect, createResource, createSignal, For } from 'solid-js';
import { AuthorQuery } from '../../query/query';

export function AuthorPage() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.author,
    postNumber: 9,
  });

  const [authorData] = createResource(state, AuthorQuery);

  createEffect(() => {
    console.log(authorData());
  });

  return (
    <div>
      <div>
        <img src={authorData()?.avatar.url}></img>
        <h1>{authorData()?.name}</h1>
      </div>
      <div>
        <span innerHTML={authorData()?.description}></span>
      </div>
      <div>
        <h2>Posts:</h2>
        <For each={authorData()?.posts.nodes}>
          {(post) => {
            return (
              <div>
                add posts here
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
