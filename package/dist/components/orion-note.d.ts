import type { Components, JSX } from "../types/components";

interface OrionNote extends Components.OrionNote, HTMLElement {}
export const OrionNote: {
  prototype: OrionNote;
  new (): OrionNote;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
