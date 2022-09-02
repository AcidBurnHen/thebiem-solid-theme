import styles from "./headermenu.module.scss";
import { BsPersonCircle } from "solid-icons/bs";
import { Link } from "@solidjs/router";


export function HeaderMenu() {


  return (
    <div class={styles.headermenu}>
      <h1 class={styles.headermenu_title}>Thebiem</h1>
     <Link class={styles.headermenu_user} href="/profile">
      <BsPersonCircle  />
     </Link>
    </div>
  )
}
