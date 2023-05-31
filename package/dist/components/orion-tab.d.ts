import type { Components, JSX } from "../types/components";

interface OrionTab extends Components.OrionTab, HTMLElement {}
export const OrionTab: {
  prototype: OrionTab;
  new (): OrionTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
