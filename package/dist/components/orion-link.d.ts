import type { Components, JSX } from "../types/components";

interface OrionLink extends Components.OrionLink, HTMLElement {}
export const OrionLink: {
  prototype: OrionLink;
  new (): OrionLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
