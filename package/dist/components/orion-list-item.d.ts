import type { Components, JSX } from "../types/components";

interface OrionListItem extends Components.OrionListItem, HTMLElement {}
export const OrionListItem: {
  prototype: OrionListItem;
  new (): OrionListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
