import styles from "./headermenu.module.scss";

export function HeaderMenu() {

 const back = () => {
  window.history.back();
 }

 const forward = () => {
  window.history.forward();
 }

  return (
    <div class={styles.headermenu}>
      <button onClick={back}>Back now</button>
      <button onClick={forward}>Forward</button>
    </div>
  )
}
