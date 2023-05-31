import type { Components, JSX } from "../types/components";

interface OrionChip extends Components.OrionChip, HTMLElement {}
export const OrionChip: {
  prototype: OrionChip;
  new (): OrionChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
