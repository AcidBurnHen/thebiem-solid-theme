import { Routes, Route } from '@solidjs/router';
import LatestPosts from './pages/posts/LatestPosts';
import SearchPosts from './pages/search/SearchPosts';
import Topics from './pages/posts/Topics';
import SinglePostPage from './pages/single-post/SinglePostPage';
import AuthorPage from './pages/author/AuthorPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';

import createLocalStore from '@solid-primitives/local-store';

function Router() {
  const [userStore, setUserStore] = createLocalStore('user', localStorage);

  return (
    <Routes>
      <Route path='/' element={<LatestPosts />} />
      <Route path='/search' element={<SearchPosts />} />
      <Route path='/topic/:category' element={<Topics />} />
      <Route path='/post/:post' element={<SinglePostPage />} />
      <Route path='/author/:author' element={<AuthorPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
  );
}

export default Router;
