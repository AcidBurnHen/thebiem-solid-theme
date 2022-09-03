import { Show } from 'solid-js';
import styles from './usercard.module.scss';

interface UserCardProps {
  avatar: string | undefined;
  name: string | undefined;
  description: string | undefined;
}

function UserCard(props: UserCardProps) {
  return (
    <div class={styles.user}>
      <div class={styles.user_card}>
        <img class={styles.user_card_img} src={props.avatar}></img>
        <div class={styles.user_card_title}>
          <h1 class={styles.user_card_title_txt}>{props.name}</h1>
        </div>
      </div>

      <Show when={props.description}>
        <span
          class={styles.user_bio}
          innerHTML={props.description}></span>
      </Show>
    </div>
  );
}

export default UserCard;
