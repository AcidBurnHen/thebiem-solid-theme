import { createResource, createSignal, Show } from 'solid-js';
import { SearchQuery } from '../../query/query';
import { OnInputEvent, OnKeyboardEvent } from '../../types/event-types';
import { Loader } from '../loader/Loader';
import { Post } from '../posts/Post';

import styles from './search.module.scss';

export function SearchPosts() {
  const [searchTerm, setSearchTerm] = createSignal('');
  const [state, setState] = createSignal({
    query: '',
    postNumber: 10,
  });

  const handleSearchTerm: OnInputEvent = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  let timer: number;

  const handleKeyDown: OnKeyboardEvent = (e) => {
    clearTimeout(timer);
  };

  const handleKeyUp: OnKeyboardEvent = (e) => {
    timer = setTimeout(() => {
      setState({ ...state(), query: searchTerm() });
    }, 1600);
  };

  const [searchResult] = createResource(state, SearchQuery);

  return (
    <>
      <div class={styles.search}>
        <input
          class={styles.search_input}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onInput={handleSearchTerm}
          type='search'
          name='search'
          id='search'
          value={searchTerm()}
        />
      </div>
      <Show when={searchResult.loading}>
        <Loader />
      </Show>
      <Show when={searchResult()?.length === 0}>
        <div class={styles.no_posts}>No posts found</div>
      </Show>
      <Post postData={searchResult} state={state()} setState={setState} />
    </>
  );
}
