import { useParams } from '@solidjs/router';
import {
  createEffect,
  createResource,
  createSignal,
  Show,
} from 'solid-js';
import { AuthorQuery } from '../../../utils/graphQL/query/query';
import { scrollHandler } from '../../../utils/scrollHandler';
import Loader from '../../../components/loader/Loader';
import UserCard from '../../../components/user/UserCard';
import AuthorPosts from '../../../components/user/AuthorPosts';

function AuthorPage() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.author,
    postNumber: 10,
  });

  const handleAuthorScroll = () => {
    scrollHandler({ state: state(), setState: setState });
  };

  window.addEventListener('scroll', handleAuthorScroll);

  const [authorData] = createResource(state, AuthorQuery);

  createEffect(() => {
    console.log(authorData()?.posts.nodes)
  })

  return (
    <div>
      <Show when={authorData.loading}>
        <Loader />
      </Show>
     <UserCard avatar={authorData()?.avatar.url} name={authorData()?.name} description={authorData()?.description}  />
      <AuthorPosts posts={authorData()?.posts.nodes} />
    </div>
  );
}

export default AuthorPage;
