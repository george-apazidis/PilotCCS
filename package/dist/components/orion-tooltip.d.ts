import type { Components, JSX } from "../types/components";

interface OrionTooltip extends Components.OrionTooltip, HTMLElement {}
export const OrionTooltip: {
  prototype: OrionTooltip;
  new (): OrionTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
