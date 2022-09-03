import styles from './headermenu.module.scss';
import { BsPersonCircle } from 'solid-icons/bs';
import { Link } from '@solidjs/router';
import { user } from '../../types/localStore-types';
import { Show } from 'solid-js';
import { UserProfileData } from '../../utils/graphQL/query/query-types';

interface HeaderMenuProps {
  user: user
}

type userData = {
  user: {
    avatar: {
      url: string
    }
    slug: string
  }
}

function HeaderMenu(props: HeaderMenuProps) {
  const data: userData | null = JSON.parse(props.user.data);

  console.log(data);

  let profileUrl = data?.user.slug === "" ? "/profile" : `/profile/${data?.user.slug}`

  return (
    <div class={styles.headermenu}>
      <Link href="/" >
      <h1 class={styles.headermenu_title}>Thebiem</h1>
      </Link>
      <Link class={styles.headermenu_user} href={profileUrl}>
      <Show when={data} fallback={<BsPersonCircle class={styles.headermenu_acc} />}> 
          <img class={styles.headermenu_user_img} src={data?.user.avatar.url}></img>
        </Show>
      </Link>
    </div>
  );
}

export default HeaderMenu;
