import { Loader } from '../loader/Loader';
import { useParams } from '@solidjs/router';
import { SinglePostQuery } from '../../query/query';
import {
  createEffect,
  createResource,
  createSignal,
  Show,
} from 'solid-js';
import { createTOCWrapper } from './accordion';
import styles from "./singlepost.module.scss";
import "./singlepost.scss";



export function SinglePost() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.post,
  });

  const [postData] = createResource(state, SinglePostQuery);

  createEffect(() => {
    console.log(postData()?.postBy);
  });


  createEffect(() => {
    postData()
    createTOCWrapper();
  })

  const tableOfContent=  document.getElementById("ez-toc-container");
  // tableOfContent?.classList.add(styles.hide)


  return (
    <div class={styles.container}>
      <div class={styles.single_post}>
        <img class={styles.single_post__image} src={postData()?.postBy.featuredImage.node.mediaItemUrl} />
        <h1 class={styles.single_post__title}>{postData()?.postBy.title}</h1>
        <article class={styles.article} innerHTML={postData()?.postBy.content}></article>
      </div>
      <Show when={postData.loading}>
            <Loader />
        </Show>
    </div>
  );
}
