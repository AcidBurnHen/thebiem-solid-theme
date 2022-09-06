import { Component } from 'solid-js';
import createLocalStore from '@solid-primitives/local-store';
import { ThemeStore, UserStore } from './types/localStore-types';

import  HeaderMenu  from './components/menus/HeaderMenu';
import MobileMenu  from './components/menus/MobileMenu';
import Router from './Router';

const App: Component = () => {
  const [theme, setTheme]: ThemeStore = createLocalStore("app", localStorage);
  const [user, setUser]: UserStore = createLocalStore();

  
  return (
    <div class='app' data-theme={theme.color}>
      <HeaderMenu user={user} />
      <Router setUser={setUser} />
      <MobileMenu theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
