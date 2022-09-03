import { createEffect, createSignal } from 'solid-js';
import { Show } from 'solid-js/web';
import styles from './alert.module.scss';

interface AlertProps {
  when: boolean;
  alertType: 'good' | 'bad';
  msg: string;
  class?: string;
}

function Alert(props: AlertProps) {
  const [show, setShow] = createSignal(false);

  createEffect(() => {
    setShow(props.when);
  });

  const closeModal = () => {
    if (props.when === true) {
      setShow(!props.when);
    }
  };

  return (
    <Show when={show()}>
      <div
        class={`${props.class} ${styles.alert} ${
          props.alertType === 'good' ? styles.alert_good : styles.alert_bad
        }`}>
        <div class={styles.alert_msg}>{props.msg}</div>
        <div class={styles.alert_close} onClick={closeModal}>
          X
        </div>
      </div>
    </Show>
  );
}

export default Alert;
