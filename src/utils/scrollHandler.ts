import { Setter } from 'solid-js';

type ScrollOptions = {
  state:
      {
        postNumber: number;
      }
  setState: Setter<{
    postNumber: number;
  }>;
};

export function scrollHandler(options: ScrollOptions) {
  let isAtBottom =
    document.documentElement.scrollHeight -
      document.documentElement.scrollTop <=
    document.documentElement.clientHeight;

  if (isAtBottom)
    options.setState({
      ...options.state,
      postNumber: options.state.postNumber + 10,
    });
}
