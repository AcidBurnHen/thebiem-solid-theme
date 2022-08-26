import {JSX} from "solid-js";

export type ButtonClickEvent = JSX.EventHandler<HTMLButtonElement, MouseEvent> 
export type SVGClickEvent = JSX.EventHandlerUnion<SVGSVGElement, MouseEvent> | undefined
export type ElementScrollEvent = JSX.EventHandler<HTMLElement, UIEvent>
export type OnInputEvent = JSX.EventHandlerUnion<HTMLInputElement, InputEvent>
export type OnKeyboardEvent = JSX.EventHandler<HTMLInputElement, KeyboardEvent>
export type OnSubmitForm = JSX.EventHandlerUnion<HTMLFormElement, Event & { submitter: HTMLElement; }> | undefined