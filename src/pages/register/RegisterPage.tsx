import styles from "./registerpage.module.scss";

export function RegisterPage() {
    return (
        <div>
            <form class={styles.register_form}>
                <label for="username">Username:</label>
                <input type="text" id="username" />
                <label for="nickname">Nickname:</label>
                <input type="text" id="nickname" />
                <label for="email">Email:</label>
                <input type="email" id="email" />
                <label for="pass">Pass:</label>
                <input type="password" id="pass" />
            </form>
        </div>
    )
}