import type { Components, JSX } from "../types/components";

interface OrionError extends Components.OrionError, HTMLElement {}
export const OrionError: {
  prototype: OrionError;
  new (): OrionError;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
