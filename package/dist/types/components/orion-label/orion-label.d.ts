/**
 * @slot default - default slot for label content
 * @slot orion-label-conditional - slot for conditional text
 */
export declare class OrionLabel {
  hasConditionalSlot: boolean;
  el: HTMLElement;
  /**
   * Shows the disabled state
   */
  disabled: boolean;
  /**
   * Shows the error state
   */
  error: boolean;
  getCSSClass(): string;
  componentWillLoad(): void;
  render(): any;
}
