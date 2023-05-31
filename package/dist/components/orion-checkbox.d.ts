import type { Components, JSX } from "../types/components";

interface OrionCheckbox extends Components.OrionCheckbox, HTMLElement {}
export const OrionCheckbox: {
  prototype: OrionCheckbox;
  new (): OrionCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
