import { Component, createEffect, createSignal, on } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import createLocalStore from '@solid-primitives/local-store';
import { LocalStore } from './types/localStore-types';

import { HeaderMenu } from './components/menus/HeaderMenu';
import { LatestPosts } from './components/posts/LatestPosts';
import { MobileMenu } from './components/menus/MobileMenu';
import { SearchPosts } from './components/search/SearchPosts';
import { Topics } from './components/posts/Topics';
import { SinglePost } from './components/single-post/SinglePost';
import { AuthorPage } from './components/author/AuthorPage';

const App: Component = () => {
  const [store, setStore]: LocalStore = createLocalStore('app');

  return (
    <div class='app' data-theme={store.theme}>
      <HeaderMenu />
      <Routes>
        <Route path='/' component={LatestPosts} />
        <Route path='/search' component={SearchPosts} />
        <Route path='/topic/:category' element={Topics} />
        <Route path='/post/:post' element={SinglePost} />
        <Route path='/author/:author' element={AuthorPage} />
      </Routes>

      <MobileMenu store={store} setStore={setStore} />
    </div>
  );
};

export default App;
