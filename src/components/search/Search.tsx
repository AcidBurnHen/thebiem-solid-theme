import { Link } from '@solidjs/router';
import { createSignal, createResource, For } from 'solid-js';
import { SearchQuery } from '../../query/query';
import { SearchResult } from '../../query/query-types';
import { OnKeyboardEvent, OnInputEvent } from '../../types/event-types';

import styles from './search.module.scss';

export function Search() {
  const [searchTerm, setSearchTerm] = createSignal('');
  const [query, setQuery] = createSignal('');

  const [searchResult] = createResource<SearchResult[], string>(
    query,
    SearchQuery
  );

  const handleSearchTerm: OnInputEvent = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  let timer: number;

  const handleKeyDown: OnKeyboardEvent = (e) => {
    console.log(e);
    clearTimeout(timer);
  };

  const handleKeyUp: OnKeyboardEvent = (e) => {
    timer = setTimeout(() => {
      setQuery(searchTerm);
    }, 1800);
  };

  return (
    <div class={styles.search}>
      <div class={styles.search__form}>
        <input
          class={styles.search__input}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onInput={handleSearchTerm}
          type='search'
          name='search'
          id='search'
          value={searchTerm()}
        />
      </div>

      <div class={styles.search_results}>
        <For each={searchResult()}>
          {(result) => {
            const imgSrc = result.node.featuredImage.node.mediaItemUrl;
            const imgDetails = result.node.featuredImage.node.mediaDetails;
            return (
              <div class={styles.search_result}>
                
                <Link class={styles.search_result__title_container} href={`/${result.node.slug}`}>
                  <h2 class={styles.search_result__title}>
                    {result.node.title}
                  </h2>
                </Link>

                <div class={styles.search_result__img_container}>
                  <img
                    width={imgDetails.width / 2}
                    height={imgDetails.height / 2}
                    class={styles.search_result__img}
                    src={imgSrc}></img>
                </div>

              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
}
