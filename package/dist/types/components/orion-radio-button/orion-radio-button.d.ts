import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot default - default slot for the radio button label
 */
export declare class OrionRadioButton {
  /**
   * The input name
   */
  name: string;
  /**
   * Disables interactions
   */
  disabled: boolean;
  /**
   * The input value
   */
  value: string;
  /**
   * The checked state of the radio button
   */
  checked: boolean;
  /**
   * Required attribute
   */
  required: boolean;
  /**
   * Emit `radioButtonChanged` event that `orion-radio-button-group` can listen for
   */
  radioButtonChanged: EventEmitter<{
    value: string;
  }>;
  onRadioChangeValue(): void;
  /**
   * Focuses the radio button. This method is used internally by the `orion-radio-button-group` component. Do not use it directly. Use the `orion-radio-button-group` component instead.
   */
  focusable: boolean;
  inputEl: HTMLInputElement;
  /**
   * The `orion-radio-button-group` component will toggle the checked prop
   */
  watchChecked(newValue: boolean, oldValue: boolean): void;
  render(): any;
}
