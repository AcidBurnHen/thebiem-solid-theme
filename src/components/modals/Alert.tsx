import { Portal, Show } from 'solid-js/web';
import styles from './alert.module.scss';

interface AlertProps {
  show: boolean;
  alertType: "good" | "bad"
  el: string;
  msg: string;
}

function Alert(props: AlertProps) {
  return (
    <Show when={props.show}>
      <Portal mount={document.getElementById(props.el) as HTMLElement}>
        <div class={`${styles.alert} ${props.alertType === "good" ? styles.alert_good : styles.alert_bad}`}>
          <p class={styles.alert_msg}>{props.msg}</p>
        </div>
      </Portal>
    </Show>
  );
}

export default Alert;
