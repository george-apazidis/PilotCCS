import type { Components, JSX } from "../types/components";

interface OrionTabs extends Components.OrionTabs, HTMLElement {}
export const OrionTabs: {
  prototype: OrionTabs;
  new (): OrionTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
