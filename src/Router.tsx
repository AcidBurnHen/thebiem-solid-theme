import { Routes, Route } from '@solidjs/router';
import { LatestPosts } from './pages/posts/LatestPosts';
import { SearchPosts } from './pages/search/SearchPosts';
import { Topics } from './pages/posts/Topics';
import { SinglePost } from './pages/posts/single-post/SinglePost';
import { AuthorPage } from './pages/author/AuthorPage';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';

export function Router() {
    return (
        <Routes>
        <Route path='/' component={LatestPosts} />
        <Route path='/search' component={SearchPosts} />
        <Route path='/topic/:category' element={Topics} />
        <Route path='/post/:post' element={SinglePost} />
        <Route path='/author/:author' element={AuthorPage} />
        <Route path='/login' element={LoginPage}/>
        <Route path='/register' element={RegisterPage} />
      </Routes>
    )
}