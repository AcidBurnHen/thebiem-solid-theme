import { BsPersonLinesFill, BsGear } from 'solid-icons/bs';
import { AiOutlineLogout } from 'solid-icons/ai';
import { createSignal, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import styles from './usermenu.module.scss';
import { Link } from '@solidjs/router';

interface UserMenuProps {
  slug: string | undefined;
}

function UserMenu(props: UserMenuProps) {
  const [toggle, setToggle] = createSignal(false);

  const toggleUserMenu = () => {
    setToggle(!toggle());
  };

  const logoutUser = () => {
    // localStorage clear works in console but not on button click
    localStorage.clear();
    location.replace('/');
    location.reload();
  };

  return (
    <div class={styles.menu}>
      <BsPersonLinesFill onClick={toggleUserMenu} class={styles.menu_icon} />
      <Show when={toggle()}>
        <div class={styles.menu_modal}>
          <Link href={`/profile/settings/${props.slug}`}>
            <BsGear class={styles.menu_icon} />
          </Link>

          <AiOutlineLogout onClick={logoutUser} class={styles.menu_icon} />
        </div>
      </Show>
    </div>
  );
}

export default UserMenu;
