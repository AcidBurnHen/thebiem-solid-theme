import { BsPersonLinesFill, BsGear } from 'solid-icons/bs';
import { AiOutlineLogout } from 'solid-icons/ai';
import { createSignal, Show, createEffect } from 'solid-js';
import styles from './usermenu.module.scss';
import { Link } from '@solidjs/router';
import { SVGClickEvent } from '../../types/event-types';

interface UserMenuProps {
  slug: string | undefined;
}

function UserMenu(props: UserMenuProps) {
  const [toggle, setToggle] = createSignal(false);
  const [logout, setLogout] = createSignal(false);

  const toggleUserMenu = () => {
    setToggle(!toggle());
  };

  const logoutUser: SVGClickEvent = () => {
      setLogout(true)
  };

  createEffect(() => {
    if (logout() === true) {
        localStorage.removeItem("data");
        location.replace("/");
    }
  })

  return (
    <div class={styles.menu}>
      <BsPersonLinesFill onClick={toggleUserMenu} class={styles.menu_icon} />
      <Show when={toggle()}>
        <div class={styles.menu_modal}>
          <Link href={`/profile/settings/${props?.slug}`}>
            <BsGear class={styles.menu_icon} />
          </Link>

          <AiOutlineLogout onClick={logoutUser} class={styles.menu_icon} />
        </div>
      </Show>
    </div>
  );
}

export default UserMenu;
