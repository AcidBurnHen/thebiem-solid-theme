import { Loader } from '../loader/Loader';
import { Link, useParams } from '@solidjs/router';
import { SinglePostQuery } from '../../query/query';
import { createEffect, createResource, createSignal, Show } from 'solid-js';
import styles from './singlepost.module.scss';
import './singlepost.scss';
import { Portal } from 'solid-js/web';

export function SinglePost() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.post,
  });

  const [tocState, setTocState] = createSignal({
    show: false,
    text: 'Open',
  });

  const [postData] = createResource(state, SinglePostQuery);

  createEffect(() => {
    postData();
    const container = document.getElementById('ez-toc-container');

    if (!tocState().show) {
      container?.children[1].classList.add(styles.hide);
    } else {
      container?.children[1].classList.remove(styles.hide);
    }

    const toggleTOC = () => {
      if (!tocState().show) {
        setTocState({ ...tocState(), text: 'Close' });
      } else {
        setTocState({ ...tocState(), text: 'Open' });
      }

      setTocState({ ...tocState(), show: !tocState().show });
    };

    return (
      <Portal mount={container?.children[0] as Node}>
        <div class={`${styles.toc} ${tocState().show ? styles.border_b : ''}`}>
          <p class={styles.toc_title}>Table of contents:</p>
          <button onClick={toggleTOC} class={styles.toc_btn}>
            {tocState().text}
          </button>
        </div>
      </Portal>
    );
  });

  return (
    <div class={styles.container}>
      <Show when={postData.loading}>
        <Loader />
      </Show>
      <div class={styles.single_post}>
        <img
          class={styles.single_post__image}
          src={postData()?.postBy.featuredImage.node.mediaItemUrl}
        />
        <h1 class={styles.single_post__title}>{postData()?.postBy.title}</h1>
        <div class={styles.single_post__author}>
          <img
            class={styles.single_post__author_img}
            src={postData()?.postBy.author.node.avatar.url}
            height={30}
            width={30}></img>
            <Link class={styles.single_post__author_name} href={`/author/${postData()?.postBy.author.node.slug}`}>
            {postData()?.postBy.author.node.name}
            </Link>
        </div>
        <article
          class={styles.article}
          innerHTML={postData()?.postBy.content}></article>
      </div>
    </div>
  );
}
