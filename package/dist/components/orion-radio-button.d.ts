import type { Components, JSX } from "../types/components";

interface OrionRadioButton extends Components.OrionRadioButton, HTMLElement {}
export const OrionRadioButton: {
  prototype: OrionRadioButton;
  new (): OrionRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
