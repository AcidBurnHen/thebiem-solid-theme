import styles from "./registerpage.module.scss";

export function RegisterPage() {
    return (
        <div class={styles.register}>
            <form class={styles.register_form}>
                <label class={styles.register_form_label} for="username">Username:</label>
                <input class={styles.register_form_input} type="text" id="username" />
                <label class={styles.register_form_label} for="nickname">Nickname:</label>
                <input class={styles.register_form_input} type="text" id="nickname" />
                <label class={styles.register_form_label} for="email">Email:</label>
                <input class={styles.register_form_input} type="email" id="email" />
                <label class={styles.register_form_label} for="pass">Pass:</label>
                <input class={styles.register_form_input} type="password" id="pass" />
                <button class={styles.register_form_btn} type="submit">Register</button>
            </form>
        </div>
    )
}