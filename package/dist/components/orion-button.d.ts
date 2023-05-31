import type { Components, JSX } from "../types/components";

interface OrionButton extends Components.OrionButton, HTMLElement {}
export const OrionButton: {
  prototype: OrionButton;
  new (): OrionButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
