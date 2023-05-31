export declare type OrionChipVariantOptions = 'success' | 'high' | 'medium' | 'low' | 'info' | 'custom';
/**
 * @slot default - default slot for chip content
 */
export declare class OrionChip {
  el: HTMLElement;
  /**
   * Stylistic variations for the chip type.
   * - **success** - results in a green chip
   * - **high** - results in a red chip
   * - **medium** - results in an orange chip
   * - **low** - results in a yellow chip
   * - **info** - results in a blue chip
   * - **custom** - results in a custom color chip (see `--orion-chip-color__bg` and `--orion-chip-color__text` css variables)
   */
  variant: OrionChipVariantOptions;
  /**
   * Toggles the ability to dismiss the chip via a close button on right of the chip
   */
  dismissible: boolean;
  /**
   * Prop used to show/hide chip
   */
  isOpen: boolean;
  /**
   * Prop used to to display a solid background color
   */
  solidBg: boolean;
  _handleClose(): void;
  /**
   * Handle closing the chip via keyboard
   */
  handleKeyPress(event: KeyboardEvent): void;
  render(): any;
}
