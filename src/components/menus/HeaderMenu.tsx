import styles from "./headermenu.module.scss";
import { BsArrowLeft, BsArrowRight } from "solid-icons/bs";


export function HeaderMenu() {

 const back = () => {
  window.history.back();
 }

 const forward = () => {
  window.history.forward();
 }

  return (
    <div class={styles.headermenu}>
      <BsArrowLeft class={styles.headermenu_back} onClick={back}/>
      <h1 class={styles.headermenu_title}>Thebiem</h1>
      <BsArrowRight class={styles.headermenu_forward} onClick={forward} />
    </div>
  )
}
