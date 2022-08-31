import { Routes, Route } from '@solidjs/router';
import { LatestPosts } from './pages/posts/LatestPosts';
import { SearchPosts } from './pages/search/SearchPosts';
import { Topics } from './pages/posts/Topics';
import { SinglePost } from './pages/posts/single-post/SinglePost';
import { AuthorPage } from './pages/author/AuthorPage';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';
import createLocalStore from '@solid-primitives/local-store';

export function Router() {
  const [userStore, setUserStore] = createLocalStore('app');

  return (
    <Routes>
      <Route path='/' element={<LatestPosts />} />
      <Route path='/search' element={<SearchPosts />} />
      <Route path='/topic/:category' element={<Topics />} />
      <Route path='/post/:post' element={<SinglePost />} />
      <Route path='/author/:author' element={<AuthorPage />} />
      <Route path='/login' element={<LoginPage test='test' />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}
