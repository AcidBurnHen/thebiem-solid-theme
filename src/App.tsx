import type { Component } from 'solid-js';
import {Routes, Route} from "@solidjs/router";

import createLocalStore from '@solid-primitives/local-store';
import { LocalStore } from './types/localStore-types';

import { Posts } from './components/posts/Posts';
import { MobileMenu } from './components/menus/MobileMenu';
import { Search } from './components/search/Search';


const App: Component = () => {
  const [store, setStore]: LocalStore = createLocalStore("app");

  setStore("theme", "light");


  return (
   <div class="app" data-theme={store.theme}>
     <Routes>
      <Route path="/" component={Posts} />
      <Route path="/search" component={Search} />
    </Routes>

    <MobileMenu store={store} setStore={setStore}/>
   </div>
  );
};

export default App;
