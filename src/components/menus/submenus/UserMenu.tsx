import { BsGearFill, BsPersonFill, BsDoorClosedFill } from 'solid-icons/bs';
import { createSignal, createEffect } from 'solid-js';
import styles from './usermenu.module.scss';
import { Link, useNavigate } from '@solidjs/router';
import { SVGClickEvent } from '../../../types/event-types';

interface UserMenuProps {
  slug: string | undefined;
}

function UserMenu(props: UserMenuProps) {
  const [logout, setLogout] = createSignal(false);
  
  const logoutUser: SVGClickEvent = () => {
    setLogout(true);
  };

  createEffect(() => {
    if (logout() === true) {
      localStorage.removeItem('data');
      location.replace('/');
    }
  });

  return (
    <div class={styles.menu}>
      <div class={styles.menu_container} >
        <Link class={styles.menu_link}  href={`/profile/${props.slug}`}>
        <BsPersonFill class={styles.menu_icon}  />
        </Link> 
        <p class={styles.menu_title}>Profile</p>
      </div>

      <div class={styles.menu_container}>
      <Link class={styles.menu_link}  href={`/profile/settings/${props.slug}`}>
        <BsGearFill class={styles.menu_icon} />
      </Link>
      <p class={styles.menu_title}>Settings</p>
      </div>

      <div class={styles.menu_container}>
      <BsDoorClosedFill onClick={logoutUser} class={styles.menu_icon} />
      <p class={styles.menu_title}>Logout</p>
      </div>
    </div>
  );
}

export default UserMenu;
