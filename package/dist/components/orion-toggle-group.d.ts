import type { Components, JSX } from "../types/components";

interface OrionToggleGroup extends Components.OrionToggleGroup, HTMLElement {}
export const OrionToggleGroup: {
  prototype: OrionToggleGroup;
  new (): OrionToggleGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
