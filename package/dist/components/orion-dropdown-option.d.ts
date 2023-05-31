import type { Components, JSX } from "../types/components";

interface OrionDropdownOption extends Components.OrionDropdownOption, HTMLElement {}
export const OrionDropdownOption: {
  prototype: OrionDropdownOption;
  new (): OrionDropdownOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
