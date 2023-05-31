import type { Components, JSX } from "../types/components";

interface OrionCheckboxGroup extends Components.OrionCheckboxGroup, HTMLElement {}
export const OrionCheckboxGroup: {
  prototype: OrionCheckboxGroup;
  new (): OrionCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
