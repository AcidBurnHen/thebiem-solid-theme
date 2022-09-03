import { useParams } from '@solidjs/router';
import { createEffect, createResource, createSignal, Show } from 'solid-js';

import { UserProfileQuery } from '../../../utils/graphQL/query/query';

import NotLoggedIn from '../../../components/user/NotLoggedIn';
import UserCard from '../../../components/user/UserCard';
import UserComments from '../../../components/user/UserComments';
import Loader from '../../../components/loader/Loader';
import UserMenu from '../../../components/user/UserMenu';

import { scrollHandler } from '../../../utils/scrollHandler';

function ProfilePage() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.user,
    postNumber: 10,
  });

  const handleCommentScroll = () => {
    scrollHandler({ state: state(), setState: setState });
  };

  window.addEventListener('scroll', handleCommentScroll);

  const [userData] = createResource(state, UserProfileQuery);

  return (
    <Show when={params.user} fallback={<NotLoggedIn />}>
      <Show when={userData.loading}>
        <Loader />
      </Show>
      <UserCard
        id="usercard"
        avatar={userData()?.avatar.url}
        name={userData()?.name}
        description={userData()?.description}
      />
      <UserMenu slug={userData()?.slug}/>
      <UserComments comments={userData()?.comments.nodes} />
    </Show>
  );
}

export default ProfilePage;
