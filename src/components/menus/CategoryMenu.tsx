import { Link } from "@solidjs/router"
import styles from "./category-menu.module.scss";

export function CategoryMenu() {
    return (
        <div class={styles.category_menu}>
            <Link href="/topic/anime">Anime</Link>
            <Link href="/topic/manga">Manga</Link>
            <Link href="/topic/kdrama">Kdrama</Link>
            <Link href="/topic/comic">Comics</Link>
            <Link href="/topics/cartoon">Cartoon</Link>
            <Link href="/topics/webtoon">Webtoon</Link>
        </div>
    )
}