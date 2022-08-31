type Setter = (key: string, value: string | number) => void
type Remove = (key: string) => void
type Clear = () => void
export type theme = {color: string}
export type ThemeStore = [store: theme, setter: Setter, remove: Remove, clear: Clear]