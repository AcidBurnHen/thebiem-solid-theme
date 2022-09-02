import { createEffect, createSignal, Resource } from 'solid-js';
import { Portal } from 'solid-js/web';
import { SinglePostData } from '../../utils/graphQL/query/query-types';
import styles from './createtoc.module.scss';

function createToC(data: Resource<SinglePostData>) {
  const [tocState, setTocState] = createSignal({
    show: false,
    text: 'Open',
  });

  createEffect(() => {
    data();
    const container = document.getElementById('ez-toc-container');

    if (!tocState().show) {
      container?.children[1].classList.add(styles.hide);
    } else {
      container?.children[1].classList.remove(styles.hide);
    }

    const toggleTOC = () => {
      if (!tocState().show) {
        setTocState({ ...tocState(), text: 'Close' });
      } else {
        setTocState({ ...tocState(), text: 'Open' });
      }

      setTocState({ ...tocState(), show: !tocState().show });
    };

    return (
      <Portal mount={container?.children[0]!}>
        <div class={`${styles.toc} ${tocState().show ? styles.border_b : ''}`}>
          <p class={styles.toc_title}>Table of contents:</p>
          <button onClick={toggleTOC} class={styles.toc_btn}>
            {tocState().text}
          </button>
        </div>
      </Portal>
    );
  });
}

export default createToC;
