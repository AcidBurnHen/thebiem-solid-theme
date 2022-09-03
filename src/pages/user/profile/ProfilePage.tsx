import NotLoggedIn from '../../../components/profile/NotLoggedIn';
import { useParams } from '@solidjs/router';
import { createEffect, createSignal, Show } from 'solid-js';

function ProfilePage() {
  const params = useParams();

  const [state, setState] = createSignal({
    params: params.user
  })

  createEffect(() => {
    console.log(state())
  })

  return (
    <Show when={params.user} fallback={<NotLoggedIn />}>
        <div>
          Profile Page
        </div>
    </Show>
    
   
  );
}

export default ProfilePage;
