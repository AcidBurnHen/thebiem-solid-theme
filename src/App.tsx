import type { Component } from 'solid-js';
import {Routes, Route} from "@solidjs/router";

import createLocalStore from '@solid-primitives/local-store';
import { LocalStore } from './types/localStore-types';

import { LatestPosts } from './components/posts/LatestPosts';
import { MobileMenu } from './components/menus/MobileMenu';
import { Search } from './components/search/Search';
import { Topics } from './components/posts/Topics';
import { SinglePost } from './components/single-post/SinglePost';


const App: Component = () => {
  const [store, setStore]: LocalStore = createLocalStore("app");

  setStore("theme", "light");


  return (
   <div class="app" data-theme={store.theme}>
     <Routes>
      <Route path="/" component={LatestPosts} />
      <Route path="/search" component={Search} />
      <Route path="/topic/:category" element={Topics} />
      <Route path="/post/:post" element={SinglePost} />
    </Routes>

    <MobileMenu store={store} setStore={setStore}/>
   </div>
  );
};

export default App;
