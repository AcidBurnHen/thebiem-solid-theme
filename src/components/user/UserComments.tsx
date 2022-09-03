import { For } from "solid-js";
import { UserComment } from "../../utils/graphQL/query/query-types";

interface UserCommentsProps {
  comments: UserComment[]
}

function UserComments(props: UserCommentsProps) {
  return <div>
    <h3>Latest activity:</h3>
    <For each={props.comments}>
      {(comment) => {
        return (
          <div>
            <p innerHTML={comment.content}></p>
          </div>
        )
      }}
    </For>
  </div>;
}

export default UserComments;
