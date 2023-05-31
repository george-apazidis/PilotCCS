import type { Components, JSX } from "../types/components";

interface OrionList extends Components.OrionList, HTMLElement {}
export const OrionList: {
  prototype: OrionList;
  new (): OrionList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
