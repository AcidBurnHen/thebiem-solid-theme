import { Link } from '@solidjs/router';
import styles from './mobile-menu.module.scss';
import { BsMoon } from 'solid-icons/bs';
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUpSquare,
} from 'solid-icons/ai';
import { store } from '../../types/localStore-types';
import { Show, createSignal } from 'solid-js';
import { CategoryMenu } from './CategoryMenu';
import { SVGClickEvent } from '../../types/event-types';

interface SetStoreProps {
  store: store;
  setStore: (key: string, value: string | number) => void;
}

export function MobileMenu(props: SetStoreProps) {
  const [state, setState] = createSignal({
    toggleMenu: false,
  });

  const switchTheme = () => {
    if (props.store.theme === 'light') {
      props.setStore('theme', 'dark');
    } else {
      props.setStore('theme', 'light');
    }

    console.log(props.store.theme);
  };

  const toggleCatMenu: SVGClickEvent = (e) => {
    setState({toggleMenu: !state().toggleMenu})
  };

  return (
    <nav class={styles.mobile_menu}>
      <Show when={state().toggleMenu}>
        <CategoryMenu />
      </Show>
      <div class={styles.mobile_menu__container}>
        <Link class={styles.mobile_menu__link} href='/'>
          <AiOutlineHome />
        </Link>
        <Link class={styles.mobile_menu__link} href='/search'>
          <AiOutlineSearch />
        </Link>

        <div>
        <AiOutlineUpSquare
          class={styles.mobile_menu__link}
          onClick={toggleCatMenu}
        />
        </div>
       

        <button class={styles.mobile_menu__btn} onClick={switchTheme}>
          <BsMoon />
        </button>
      </div>
    </nav>
  );
}
