import type { Components, JSX } from "../types/components";

interface OrionDateInput extends Components.OrionDateInput, HTMLElement {}
export const OrionDateInput: {
  prototype: OrionDateInput;
  new (): OrionDateInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
