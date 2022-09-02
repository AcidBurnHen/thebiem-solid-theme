import Loader from '../../components/loader/Loader';
import { Link } from '@solidjs/router';
import { Resource, Show } from 'solid-js';
import styles from './singlepost.module.scss';
import './singlepost.scss';
import { SinglePostData } from '../../utils/graphQL/query/query-types';

interface SinglePostProps {
  postData: Resource<SinglePostData>;
}

function SinglePost(props: SinglePostProps) {
  return (
    <div class={styles.container}>
      <Show when={props.postData.loading}>
        <Loader />
      </Show>
      <div class={styles.single_post}>
        <img
          class={styles.single_post__image}
          src={props.postData()?.postBy.featuredImage.node.mediaItemUrl}
        />
        <h1 class={styles.single_post__title}>
          {props.postData()?.postBy.title}
        </h1>
        <div class={styles.single_post__author}>
          <img
            class={styles.single_post__author_img}
            src={props.postData()?.postBy.author.node.avatar.url}
            height={30}
            width={30}></img>
          <Link
            class={styles.single_post__author_name}
            href={`/author/${props.postData()?.postBy.author.node.slug}`}>
            {props.postData()?.postBy.author.node.name}
          </Link>
        </div>
        <article
          class={styles.article}
          innerHTML={props.postData()?.postBy.content}></article>
      </div>
    </div>
  );
}

export default SinglePost;
