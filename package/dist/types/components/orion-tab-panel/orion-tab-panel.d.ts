export declare class OrionTabPanel {
  /**
   * Index of tab that controls if this panel is active. Set by a parent orion-tabs component.
   */
  panelIndex: number;
  /**
   * Specifies which orion-tabs element this panel is bound to. Set by a parent orion-tabs component.
   */
  for: string;
  /**
   * Marks the panel as active or not
   */
  isActive: boolean;
  tabSelected(e: CustomEvent): void;
  private getPanelClasses;
  render(): any;
}
