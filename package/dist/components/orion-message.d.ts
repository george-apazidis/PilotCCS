import type { Components, JSX } from "../types/components";

interface OrionMessage extends Components.OrionMessage, HTMLElement {}
export const OrionMessage: {
  prototype: OrionMessage;
  new (): OrionMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
