import Query from '../query/query';
import { Post } from '../query/query-types';
import { createResource, createSignal, For, Show } from 'solid-js';
import { Link } from '@solidjs/router';

export function HomePage() {
  const [postNumber, setPostNumber] = createSignal(10);
  const [postsData] = createResource<Post[], number>(postNumber, Query)

  const handleScroll = () => {
    let isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight

    if (isAtBottom) 
      setPostNumber((postNumber) => postNumber + 10);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <For each={postsData()}>
        {(post) => {
          const image = post.featuredImage.node;
          const author = post.author.node;
          const category = post.categories.nodes.slice(0, 3);
          const year = post.date.substring(0, 4);
          const month = post.date.substring(5, 7);
          const day = post.date.substring(8, 10);
          const date = `${day}/${month}/${year}`;
          const excerpt = post.excerpt
            .replace(/[^a-zA-Z0-9., ]/g, '')
            .substring(1, 200)
            .concat('...');

          return (
            <div>
              <img
                src={image.mediaItemUrl}
                width={image.mediaDetails.width / 2}
                height={image.mediaDetails.height / 2}
              />
              <h1>{post.title}</h1>

              <div>
                <For each={category}>{(cat) => <h2>{cat.name}</h2>}</For>
              </div>

              <div>
                <p>Published: {date}</p>
                <div>
                  <p>
                    Author:{' '}
                    <Link href={`/author/${author.slug}`}>{author.name}</Link>
                  </p>
                </div>
              </div>

              <section>{excerpt}</section>

              <Link href={`/posts/${post.slug}`}>View Post</Link>
            </div>
          );
        }}
      </For>
      <Show when={postsData.loading}>
        <>Loading...</>
      </Show>
    </div>
  );
}
