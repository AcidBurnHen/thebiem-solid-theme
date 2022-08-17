import { Link } from '@solidjs/router';
import styles from './mobile-menu.module.scss';
import { BsMoon } from 'solid-icons/bs';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUpSquare,
} from 'solid-icons/ai';
import { store } from '../../types/localStore-types';

interface SetStoreProps {
  store: store;
  setStore: (key: string, value: string | number) => void;
}

export function MobileMenu(props: SetStoreProps) {

  const switchTheme = () => {
    if (props.store.theme === 'light') {
      props.setStore('theme', 'dark');
    } else {
      props.setStore('theme', 'light');
    }

    console.log(props.store.theme);
  };

  return (
    <nav class={styles.mobile_menu}>
      <div class={styles.mobile_menu__container}>
        <Link class={styles.mobile_menu__link} href='/'>
          <AiOutlineHome />
        </Link>
        <Link class={styles.mobile_menu__link} href='/search'>
          <AiOutlineSearch />
        </Link>
        <Link class={styles.mobile_menu__link} href='/categories'>
          <AiOutlineUpSquare />
        </Link>
        <button class={styles.mobile_menu__btn} onClick={switchTheme}>
          <BsMoon />
        </button>
      </div>
    </nav>
  );
}
