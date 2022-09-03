import { Link } from "@solidjs/router";
import { For } from "solid-js";
import { AuthorPostsData } from "../../utils/graphQL/query/query-types";
import styles from "./authorposts.module.scss";

interface AuthorPostsProps {
    posts: AuthorPostsData[] | undefined
}

function AuthorPosts(props: AuthorPostsProps) {
    return (
        <div>
      <h3 class={styles.posts_title}>Posts:</h3>
      <div class={styles.posts}>
        <For each={props.posts}>
          {(post) => {
            return (
              <Link href={`/post/${post.slug}`} class={styles.posts_card}>
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
    )
}

export default AuthorPosts