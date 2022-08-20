import styles from "./accordion.module.scss"

export function createTOCWrapper() {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode("Click me"));
    button?.classList.add(styles.accordion_btn);
    const tableOfContent=  document.getElementById("ez-toc-container");
    tableOfContent?.insertBefore(button, tableOfContent.children[0]);
}