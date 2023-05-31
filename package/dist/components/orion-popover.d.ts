import type { Components, JSX } from "../types/components";

interface OrionPopover extends Components.OrionPopover, HTMLElement {}
export const OrionPopover: {
  prototype: OrionPopover;
  new (): OrionPopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
