import {JSX} from "solid-js";

export type ButtonClickEvent = JSX.EventHandler<HTMLButtonElement, MouseEvent> 
export type ElementScrollEvent = JSX.EventHandler<HTMLElement, UIEvent>
export type OnInputEvent = JSX.EventHandlerUnion<HTMLInputElement, InputEvent>
export type OnKeyboardEvent = JSX.EventHandler<HTMLInputElement, KeyboardEvent>