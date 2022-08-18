import { createSignal, createResource, For, createMemo, createEffect, Show } from 'solid-js';
import { SearchQuery } from '../../query/query';
import { SearchResult } from '../../query/query-types';
import {OnKeyboardEvent, OnInputEvent} from '../../types/event-types';

export function Search() {
  const [searchTerm, setSearchTerm] = createSignal('');
  const [query, setQuery] = createSignal("");

  const [searchResult] = createResource<SearchResult[], string>(query, SearchQuery)

  const handleSearchTerm: OnInputEvent = (e) => {
    setSearchTerm(e.currentTarget.value);
    
  };

  let timer: number

  const handleKeyDown: OnKeyboardEvent = (e) => {
    clearTimeout(timer);
  }

  const handleKeyUp: OnKeyboardEvent = (e) => {
    timer = setTimeout(() => {
      setQuery(searchTerm)
    }, 1800)

  }

  return (
    <div>
      <form>
        <label for='search'></label>
        <input
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          onInput={handleSearchTerm}
          type='search'
          name='search'
          id='search'
          value={searchTerm()}
        />
      </form>
   <div>
   <Show when={query() !== ""} >
   <For each={searchResult()}>
    {(result) => {

        return (
            <div> 
               {result.node.title}
            </div>
        )
    }}
    </For>
   </Show>
   </div>
    </div>
  );
}
