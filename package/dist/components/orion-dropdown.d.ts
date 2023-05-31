import type { Components, JSX } from "../types/components";

interface OrionDropdown extends Components.OrionDropdown, HTMLElement {}
export const OrionDropdown: {
  prototype: OrionDropdown;
  new (): OrionDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
