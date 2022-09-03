import { Link } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { OnInputEvent, OnSubmitForm } from '../../types/event-types';
import { LoginUser } from '../../utils/graphQL/mutate/mutate';
import styles from './loginpage.module.scss';
import Alert from '../../components/modals/Alert';

function LoginPage() {
  const [formState, setFormState] = createSignal({
    username: '',
    password: '',
  });

  const [alertState, setAlertState] = createSignal({
    alert: false,
    alertMsg: "testing how this works with a longer alert message and if everything is centered right",
  })

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

  const openModal = () => {
    setAlertState({...alertState(), alert: true});
  }

  return (
    <div class={styles.login}>
      <p style="margin: 4rem;" onClick={openModal}> Open
       modal</p>
       <Alert class={styles.alert} when={alertState().alert} alertType="bad" msg={alertState().alertMsg} />
      <form id='login_form' onSubmit={handleSubmit} class={styles.login_form}>
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
      <div class={styles.noaccount}>
        <p>Don't have an account?</p>
        <Link href='/register'>Register a new one</Link>
      </div>
    </div>
  );
}

export default LoginPage;
