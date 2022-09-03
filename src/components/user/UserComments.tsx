import { Link } from "@solidjs/router";
import { For } from "solid-js";
import { UserComment } from "../../utils/graphQL/query/query-types";
import styles from "./usercomments.module.scss";

interface UserCommentsProps {
  comments: UserComment[] | undefined
}

function UserComments(props: UserCommentsProps) {
  return <div class={styles.comments}>
    <h3 class={styles.comments_heading}>Latest comments:</h3>
    <For each={props.comments}>
      {(comment) => {
        const title = comment.commentedOn.node.title.substring(0, 28);
        return (
          <div class={styles.comment}>
            <p class={styles.comment_content} innerHTML={comment.content}></p>
            <p class={styles.comment_post}>On post: <Link href={`/post/${comment.commentedOn.node.slug}`}>{title}...</Link></p>
          </div>
        )
      }}
    </For>
  </div>;
}

export default UserComments;
