import styles from './loader.module.scss';

function Loader() {
  return (
    <div class={styles.loader_container}>
      <div class={styles.loader}></div>
    </div>
  );
}

export default Loader;
