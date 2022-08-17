import type { Component } from 'solid-js';
import {Routes, Route} from "@solidjs/router";
import { Posts } from './components/posts/Posts';
import { MobileMenu } from './components/menus/MobileMenu';
import createLocalStore from '@solid-primitives/local-store';
import { LocalStore } from './types/localStore-types';


const App: Component = () => {
  const [store, setStore]: LocalStore = createLocalStore("app");

  setStore("theme", "light");


  return (
   <div class="app" data-theme={store.theme}>
     <Routes>
      <Route path="/" component={Posts} />
    </Routes>

    <MobileMenu store={store} setStore={setStore}/>
   </div>
  );
};

export default App;
