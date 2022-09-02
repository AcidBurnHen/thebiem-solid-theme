import { Link, useParams } from '@solidjs/router';
import { createEffect, createResource, createSignal, For, Show } from 'solid-js';
import {AuthorQuery} from "../../utils/graphQL/query/query"
import { scrollHandler } from '../../utils/scrollHandler';
import { Loader } from '../../components/loader/Loader';
import styles from './authorpage.module.scss';

export function AuthorPage() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.author,
    postNumber: 10,
  });

  const handleScroll = () => {
    scrollHandler({ state: state(), setState: setState });
  };

  window.addEventListener('scroll', handleScroll);

  const [authorData] = createResource(state, AuthorQuery);

  return (
    <div>
      <Show when={authorData.loading}>
        <Loader />
      </Show>
      <div class={styles.author}>
        <div class={styles.author_card}>
          <img
            class={styles.author_card_img}
            src={authorData()?.avatar.url}></img>
          <div class={styles.author_card_title}>
            <h1 class={styles.author_card_title_txt}>{authorData()?.name}</h1>
          </div>
        </div>

        <Show when={authorData()?.description}>
          <span
            class={styles.author_bio}
            innerHTML={authorData()?.description}></span>
        </Show>
      </div>
      <h3 class={styles.posts_title}>Posts:</h3>
      <div class={styles.posts}>
        <For each={authorData()?.posts.nodes}>
          {(post) => {
            return (
              <Link href={`/post/${post.slug}`}  class={styles.posts_card}>
                <div class={styles.posts_card_title}>
                  <h2 class={styles.posts_card_title_txt}>
                    {post.title.substring(0, 36)}...
                  </h2>
                </div>
                <img
                  class={styles.posts_card_img}
                  src={post.featuredImage.node.mediaItemUrl}></img>
              </Link>
            );
          }}
        </For>
      </div>
    </div>
  );
}
