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
    toggleMenuClass: '',
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
    if (!state().toggleMenu) {
      setState({ ...state(), toggleMenuClass: styles.toggleCat });
    } else {
      setState({ ...state(), toggleMenuClass: styles.hideCat });
    }

    setState({ ...state(), toggleMenu: !state().toggleMenu });
  };

  return (
    <nav class={styles.mobile_menu}>
      <Show when={state().toggleMenu}>
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
            class={`${styles.mobile_menu__toggle} ${state().toggleMenuClass}`}
            onClick={toggleCatMenu}
          />
        </div>

        <BsMoon class={styles.mobile_menu__btn} onClick={switchTheme} />
      </div>
    </nav>
  );
}
