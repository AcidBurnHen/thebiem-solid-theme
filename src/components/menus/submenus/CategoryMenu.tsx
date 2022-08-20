import { Link } from "@solidjs/router"
import styles from "./category-menu.module.scss";

export function CategoryMenu() {
    return (
        <div class={styles.category_menu}>
            <Link href="/topic/anime">Anime</Link>
            <Link href="/topic/manga">Manga</Link>
            <Link href="/topic/webtoon">Webtoon</Link>
            <Link href="/topic/manhwa">Manhwa</Link>
            <Link href="/topic/kdrama">Kdrama</Link>
            <Link href="/topic/chinese">Chinese</Link>
            <Link href="/topic/cartoons">Cartoons</Link>
        </div>
    )
}