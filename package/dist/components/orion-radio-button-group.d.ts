import type { Components, JSX } from "../types/components";

interface OrionRadioButtonGroup extends Components.OrionRadioButtonGroup, HTMLElement {}
export const OrionRadioButtonGroup: {
  prototype: OrionRadioButtonGroup;
  new (): OrionRadioButtonGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
