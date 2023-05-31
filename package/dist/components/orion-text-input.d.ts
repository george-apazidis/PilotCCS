import type { Components, JSX } from "../types/components";

interface OrionTextInput extends Components.OrionTextInput, HTMLElement {}
export const OrionTextInput: {
  prototype: OrionTextInput;
  new (): OrionTextInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
