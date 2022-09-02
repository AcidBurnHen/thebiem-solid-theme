import styles from "./notloggedin.module.scss";
import { Link } from "@solidjs/router";

export function NotLoggedIn() {
  return (
    <div class={styles.container}>
      <p>You are currently not logged in.</p>
      <p><Link href="/login">Login</Link>, or <Link href="/register">register</Link> a new account.</p>
    </div>
  );
}
