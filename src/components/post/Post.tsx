import { For, Resource, Setter, Show } from 'solid-js';
import styles from './post.module.scss';

import { SPost } from '../../utils/graphQL/query/query-types';
import { Link } from '@solidjs/router';
import { Loader } from '../loader/Loader';

import { scrollHandler } from '../../utils/scrollHandler';

interface PostProps {
  postData: Resource<SPost[] | undefined>;
  state: {
    postNumber: number;
    category?: string;
  };
  setState: Setter<{
    postNumber: number;
    category?: string;
  }>;
}

export function Post(props: PostProps) {
  
  const handleScroll = () => {
    scrollHandler({ state: props.state, setState: props.setState });
  };

  window.addEventListener("scroll", handleScroll)

  return (
    <div class={styles.posts}>
      <For each={props.postData()}>
        {(post) => {
          const image = post.featuredImage.node;
          const author = post.author.node;
          const year = post.date.substring(0, 4);
          const month = post.date.substring(5, 7);
          const day = post.date.substring(8, 10);
          const date = `${day}/${month}/${year}`;
          const excerpt = post.excerpt
            .replace(/[^a-zA-Z0-9., ]/g, '')
            .substring(1, 200)
            .concat('...');

          return (
            <div class={styles.posts__card}>
              <div class={styles.posts__author}>
                <img
                  class={styles.posts__author_img}
                  src={author.avatar.url}
                  height={30}
                  width={30}
                />
                <Link
                  class={styles.posts__author_name}
                  href={`/author/${author.slug}`}>
                  {author.name}
                </Link>
                <p>{date}</p>
              </div>
              <img
                class={styles.posts__image}
                src={image.mediaItemUrl}
                width={image.mediaDetails.width / 2}
                height={image.mediaDetails.height / 2}
              />

              <h1 class={styles.posts__title}>{post.title}</h1>

              <section class={styles.posts__excerpt}>{excerpt}</section>

              <Link class={styles.posts__viewmore} href={`/post/${post.slug}`}>
                View Post
              </Link>
            </div>
          );
        }}
      </For>
      <Show when={props.postData.loading}>
        <Loader />
      </Show>
    </div>
  );
}
