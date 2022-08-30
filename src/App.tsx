import { Component } from 'solid-js';
import createLocalStore from '@solid-primitives/local-store';
import { LocalStore } from './types/localStore-types';

import { HeaderMenu } from './components/menus/HeaderMenu';
import { MobileMenu } from './components/menus/MobileMenu';
import { Router } from './Router';


const App: Component = () => {
  const [store, setStore]: LocalStore = createLocalStore('app');

  return (
    <div class='app' data-theme={store.theme}>
      <HeaderMenu />
      <Router />
      <MobileMenu store={store} setStore={setStore} />
    </div>
  );
};

export default App;
