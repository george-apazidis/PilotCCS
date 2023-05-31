import type { Components, JSX } from "../types/components";

interface OrionStepper extends Components.OrionStepper, HTMLElement {}
export const OrionStepper: {
  prototype: OrionStepper;
  new (): OrionStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
