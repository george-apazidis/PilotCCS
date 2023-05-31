import type { Components, JSX } from "../types/components";

interface OrionToggle extends Components.OrionToggle, HTMLElement {}
export const OrionToggle: {
  prototype: OrionToggle;
  new (): OrionToggle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
