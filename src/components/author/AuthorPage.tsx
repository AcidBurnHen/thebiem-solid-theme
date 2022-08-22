import { useParams } from '@solidjs/router';
import { createEffect, createResource, createSignal, For } from 'solid-js';
import { AuthorQuery } from '../../query/query';
import styles from './authorpage.module.scss';

export function AuthorPage() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.author,
    postNumber: 10,
  });

  const [authorData] = createResource(state, AuthorQuery);

  return (
    <div>
      <div class={styles.author}>
        <div class={styles.author_card}>
          <img
            class={styles.author_card_img}
            src={authorData()?.avatar.url}></img>
          <h1 class={styles.author_card_title}>{authorData()?.name}</h1>
        </div>
        <span
          class={styles.author_bio}
          innerHTML={authorData()?.description}></span>
      </div>
      <h2>Posts:</h2>
      <div class={styles.posts}>
        <For each={authorData()?.posts.nodes}>
          {(post) => {
            let i = 1;
            return (
              <div class={styles.posts_card}>
                <div class={styles.posts_card_title}>
                  <h2 class={styles.posts_card_title_txt}>
                    {post.title.substring(0, 36)}...
                  </h2>
                </div>
                <img
                  class={styles.posts_card_img}
                  src={post.featuredImage.node.mediaItemUrl}></img>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
