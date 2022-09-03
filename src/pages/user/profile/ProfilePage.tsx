import NotLoggedIn from '../../../components/user/NotLoggedIn';
import { useParams } from '@solidjs/router';
import { createEffect, createResource, createSignal, Show } from 'solid-js';
import { UserProfileQuery } from '../../../utils/graphQL/query/query';
import UserCard from '../../../components/user/UserCard';
import UserComments from '../../../components/user/UserComments';

function ProfilePage() {
  const params = useParams();

  const [state, setState] = createSignal({
    slug: params.user,
    commentNumber: 10
  })

  const [userData] = createResource(state, UserProfileQuery)

  createEffect(() => {
    console.log(userData())
  })

  return (
    <Show when={params.user} fallback={<NotLoggedIn />}>
        <UserCard avatar={userData()?.avatar.url} name={userData()?.name} description={userData()?.description} />
        <UserComments comments={userData()?.comments.nodes} />
    </Show>
    
   
  );
}

export default ProfilePage;
