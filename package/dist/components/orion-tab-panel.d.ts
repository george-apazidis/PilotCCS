import type { Components, JSX } from "../types/components";

interface OrionTabPanel extends Components.OrionTabPanel, HTMLElement {}
export const OrionTabPanel: {
  prototype: OrionTabPanel;
  new (): OrionTabPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
