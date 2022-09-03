export type StoreSetter = (key: string, value: string | number) => void;
type Remove = (key: string) => void;
type Clear = () => void;
export type theme = { color: string };
export type ThemeStore = [
  store: theme,
  setter: StoreSetter,
  remove: Remove,
  clear: Clear
];
export type user = {
  data: string
};
export type UserStore = [
  store: user,
  setter: StoreSetter,
  remove: Remove,
  clear: Clear
];
