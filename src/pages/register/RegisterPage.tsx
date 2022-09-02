import { Link } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { OnInputEvent, OnSubmitForm } from '../../types/event-types';
import { RegisterUser } from '../../utils/graphQL/mutate/mutate';
import styles from './registerpage.module.scss';

function RegisterPage() {
  const [formState, setFormState] = createSignal({
    username: '',
    nickname: '',
    email: '',
    password: '',
  });

  const handleUsername: OnInputEvent = (e) => {
    setFormState({ ...formState(), username: e.currentTarget.value });
  };

  const handleNickname: OnInputEvent = (e) => {
    setFormState({ ...formState(), nickname: e.currentTarget.value });
  };

  const handleEmail: OnInputEvent = (e) => {
    setFormState({ ...formState(), email: e.currentTarget.value });
  };

  const handlePass: OnInputEvent = (e) => {
    setFormState({ ...formState(), password: e.currentTarget.value });
  };

  const handleSubmit: OnSubmitForm = async (e) => {
    e.preventDefault();
    let check =
      formState().username !== '' &&
      formState().nickname !== '' &&
      formState().email !== '' &&
      formState().password !== '';
    let data;
    if (check) data = await RegisterUser(formState());
    console.log(data);
  };

  return (
    <div class={styles.register}>
      <form onSubmit={handleSubmit} class={styles.register_form}>
        <label class={styles.register_form_label} for='username'>
          Username:
        </label>
        <input
          onInput={handleUsername}
          class={styles.register_form_input}
          type='text'
          id='username'
        />
        <label class={styles.register_form_label} for='nickname'>
          Nickname:
        </label>
        <input
          onInput={handleNickname}
          class={styles.register_form_input}
          type='text'
          id='nickname'
        />
        <label class={styles.register_form_label} for='email'>
          Email:
        </label>
        <input
          onInput={handleEmail}
          class={styles.register_form_input}
          type='email'
          id='email'
        />
        <label class={styles.register_form_label} for='pass'>
          Password:
        </label>
        <input
          onInput={handlePass}
          class={styles.register_form_input}
          type='password'
          id='pass'
        />
        <button class={styles.register_form_btn} type='submit'>
          Register
        </button>
      </form>
      <div class={styles.noaccount}>
        <p>Already have an existing account?</p>
        <Link href='/login'>Login to your profile</Link>
      </div>
    </div>
  );
}

export default RegisterPage;
