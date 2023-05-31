import type { Components, JSX } from "../types/components";

interface OrionLabel extends Components.OrionLabel, HTMLElement {}
export const OrionLabel: {
  prototype: OrionLabel;
  new (): OrionLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
