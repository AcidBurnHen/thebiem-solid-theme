import { createEffect, createSignal } from 'solid-js';
import { OnInputEvent, OnSubmitForm } from '../../types/event-types';
import { LoginUser } from '../../graphQL/mutate/mutate';
import styles from './loginpage.module.scss';

export function LoginPage() {
  const [formState, setFormState] = createSignal({
    username: '',
    password: '',
  });

  const handleName: OnInputEvent = (e) => {
    setFormState({ ...formState(), username: e.currentTarget.value });
  };

  const handlePass: OnInputEvent = (e) => {
    setFormState({ ...formState(), password: e.currentTarget.value });
  };

  const handleSubmit: OnSubmitForm = async (e) => {
    e.preventDefault();
    let check = formState().username !== "" && formState().password !== ""
    let data
    if(check)
    data = await LoginUser(formState())
    console.log(data)
  };


  return (
    <div>
      <form onSubmit={handleSubmit} class={styles.login_form}>
        <label for='name'>Username:</label>
        <input onInput={handleName} type='text' id='name' />
        <label for='pass'>Password:</label>
        <input onInput={handlePass} type='password' id='pass' />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
