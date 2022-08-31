import { createSignal } from 'solid-js';
import { OnInputEvent, OnSubmitForm } from '../../types/event-types';
import { LoginUser } from '../../utils/graphQL/mutate/mutate';
import styles from './loginpage.module.scss';

type LoginProps = {
  test: string;
};

export function LoginPage(props: LoginProps) {
  const [formState, setFormState] = createSignal({
    username: '',
    password: '',
  });

  console.log(props);

  const handleName: OnInputEvent = (e) => {
    setFormState({ ...formState(), username: e.currentTarget.value });
  };

  const handlePass: OnInputEvent = (e) => {
    setFormState({ ...formState(), password: e.currentTarget.value });
  };

  const handleSubmit: OnSubmitForm = async (e) => {
    e.preventDefault();
    let check = formState().username !== '' && formState().password !== '';
    let data;
    if (check) data = await LoginUser(formState());
    console.log(data);
    /* Need to decide what approach to use for storing the JWT */
  };

  return (
    <div class={styles.login}>
      <form id='form' onSubmit={handleSubmit} class={styles.login_form}>
        <label class={styles.login_form_label} for='name'>
          Username:
        </label>
        <input
          class={styles.login_form_input}
          onInput={handleName}
          type='text'
          id='name'
        />
        <label class={styles.login_form_label} for='pass'>
          Password:
        </label>
        <input
          class={styles.login_form_input}
          onInput={handlePass}
          type='password'
          id='pass'
        />
        <button class={styles.login_form_btn} type='submit'>
          Login
        </button>
      </form>
    </div>
  );
}
