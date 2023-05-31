import type { Components, JSX } from "../types/components";

interface OrionDrawer extends Components.OrionDrawer, HTMLElement {}
export const OrionDrawer: {
  prototype: OrionDrawer;
  new (): OrionDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
