import styles from './headermenu.module.scss';
import { BsPersonCircle } from 'solid-icons/bs';
import { Link } from '@solidjs/router';
import { user } from '../../types/localStore-types';
import { createSignal, Show } from 'solid-js';
import { UserData } from '../../utils/graphQL/query/query-types';
import UserMenu from './submenus/UserMenu';

interface HeaderMenuProps {
  user: user
}

type userData = {
  user: UserData
}

function HeaderMenu(props: HeaderMenuProps) {
  const data: userData = JSON.parse(props.user.data)
  const [toggle, setToggle] = createSignal(false);

  const toggleUserMenu = () => {
    setToggle(!toggle());
    console.log(toggle())
  };

  return (
    <div class={styles.headermenu}>
      <Link class={styles.headermenu_title} href="/" >
      <h1 class={styles.headermenu_title_txt}>Thebiem</h1>
      </Link>
      <div class={styles.headermenu_user}>
      <Show when={data} fallback={<Link  href="/profile"><BsPersonCircle class={styles.headermenu_acc} /></Link>}> 
          <div onClick={toggleUserMenu} class={styles.headermenu_user_hitbox}><img class={styles.headermenu_user_img} src={data?.user.avatar.url}></img></div>
      </Show>
      <Show when={toggle()}>
        <UserMenu slug={data?.user.slug} />
      </Show>
      </div>
      
    </div>
  );
}

export default HeaderMenu;
