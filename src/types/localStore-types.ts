export type store = {theme: string}
export type LocalStore = [store: store, setter: (key: string, value: string | number) => void, remove: (key: string) => void, clear: () => void]