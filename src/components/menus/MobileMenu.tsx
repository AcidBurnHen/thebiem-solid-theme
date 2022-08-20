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
import { CategoryMenu } from './submenus/CategoryMenu';

interface SetStoreProps {
  store: store;
  setStore: (key: string, value: string | number) => void;
}

export function MobileMenu(props: SetStoreProps) {
  const [state, setState] = createSignal({
    toggleCat: false,
    catMenuClass: '',
  });

  const switchTheme = () => {
    if (props.store.theme === 'light') {
      props.setStore('theme', 'dark');
    } else {
      props.setStore('theme', 'light');
    }
  };

  type Toggle = (
    toggle: boolean,
    toggleClass: string,
    menu: string,
    toggledStyle: string,
    closedStyle: string
  ) => void;

  const toggle: Toggle = (
    toggle,
    toggleclass,
    menu,
    toggledStyle,
    closedStyle
  ) => {
    let theMenu = menu;
    let toggleMenu = toggleclass;
    if (!toggle) {
      setState({ ...state(), [theMenu]: toggledStyle });
    } else {
      setState({ ...state(), [theMenu]: closedStyle });
    }

    setState({ ...state(), [toggleMenu]: !toggle });
  };

  const toggleCatMenu = () => {
    toggle(
      state().toggleCat,
      'toggleCat',
      'catMenuClass',
      styles.toggleCat,
      styles.hideCat
    );
  };


  return (
    <nav class={styles.mobile_menu}>
      <Show when={state().catMenuClass.startsWith('_toggleCat')}>
        <CategoryMenu />
      </Show>
      <div class={styles.mobile_menu__container}>
        <Link class={styles.mobile_menu__btn} href='/'>
          <AiOutlineHome />
        </Link>
        <Link
          class={styles.mobile_menu__btn}
          href='/search'>
          <AiOutlineSearch />
        </Link>

        <div>
          <AiOutlineUpSquare
            class={`${styles.mobile_menu__toggle} ${state().catMenuClass}`}
            onClick={toggleCatMenu}
          />
        </div>

        <BsMoon class={styles.mobile_menu__btn} onClick={switchTheme} />
      </div>
    </nav>
  );
}
