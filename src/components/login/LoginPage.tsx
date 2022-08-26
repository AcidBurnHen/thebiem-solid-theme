import { OnSubmitForm } from "../../types/event-types";
import styles from "./loginpage.module.scss";

export function LoginPage() {
    const handleSubmit: OnSubmitForm = (e) => {
        e.preventDefault()
    }

    return (
        <div>
        <form onSubmit={handleSubmit} class={styles.login_form}>
            <label for="name">Username:</label>
            <input type="text" id="name" />
            <label for="pass">Password:</label>
            <input type="password" id="pass"/>
        <button type="submit">Login</button>
        </form>
    </div>
    )
}