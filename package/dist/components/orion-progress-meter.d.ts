import type { Components, JSX } from "../types/components";

interface OrionProgressMeter extends Components.OrionProgressMeter, HTMLElement {}
export const OrionProgressMeter: {
  prototype: OrionProgressMeter;
  new (): OrionProgressMeter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
