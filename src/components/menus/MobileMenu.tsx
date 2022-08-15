import { Link } from '@solidjs/router';
import './mobile-menu.scss';
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
    <nav class='mobile-menu'>
      <div class='mobile-menu__container'>
        <Link class='mobile-menu__link' href='/'>
          <AiOutlineHome />
        </Link>
        <Link class='mobile-menu__link' href='/search'>
          <AiOutlineSearch />
        </Link>
        <Link class='mobile-menu__link' href='/categories'>
          <AiOutlineUpSquare />
        </Link>
        <button class='mobile-menu__btn' onClick={switchTheme}>
          <BsMoon />
        </button>
      </div>
    </nav>
  );
}
