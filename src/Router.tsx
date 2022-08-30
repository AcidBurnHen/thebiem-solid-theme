import { Routes, Route } from '@solidjs/router';
import { LatestPosts } from './components/posts/LatestPosts';
import { SearchPosts } from './components/search/SearchPosts';
import { Topics } from './components/posts/Topics';
import { SinglePost } from './components/posts/single-post/SinglePost';
import { AuthorPage } from './components/author/AuthorPage';
import { LoginPage } from './components/login/LoginPage';
import { RegisterPage } from './components/login/RegisterPage';

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