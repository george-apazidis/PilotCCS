import type { Components, JSX } from "../types/components";

interface OrionAccordion extends Components.OrionAccordion, HTMLElement {}
export const OrionAccordion: {
  prototype: OrionAccordion;
  new (): OrionAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
