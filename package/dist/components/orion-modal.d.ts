import type { Components, JSX } from "../types/components";

interface OrionModal extends Components.OrionModal, HTMLElement {}
export const OrionModal: {
  prototype: OrionModal;
  new (): OrionModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
