import { BsPerson, BsGear } from 'solid-icons/bs';
import { AiOutlineLogout } from 'solid-icons/ai';
import { createSignal, Show, createEffect } from 'solid-js';
import styles from './usermenu.module.scss';
import { Link } from '@solidjs/router';
import { SVGClickEvent } from '../../../types/event-types';

interface UserMenuProps {
  slug: string | undefined;
}

function UserMenu(props: UserMenuProps) {
  
  const [logout, setLogout] = createSignal(false);

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
      <BsPerson class={styles.menu_icon} />
      
        <div class={styles.menu_modal}>
          <Link href={`/profile/settings/${props?.slug}`}>
            <BsGear class={styles.menu_icon} />
          </Link>

          <AiOutlineLogout onClick={logoutUser} class={styles.menu_icon} />
        </div>
     
    </div>
  );
}

export default UserMenu;
