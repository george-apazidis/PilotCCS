import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot default - default slot for the dropdown option label
 */
export declare class OrionDropdownOption {
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
   * The label for the input element passed in as a slot
   */
  label: string;
  /**
   * The checked state of the dropdown option
   */
  checked: boolean;
  /**
   * Required attribute
   */
  required: boolean;
  /**
   * Emit `dropdownOptionChanged` event that `orion-dropdown` can listen for
   */
  dropdownOptionChanged: EventEmitter<{
    value: string;
    label: string;
    checked: boolean;
  }>;
  onDropdownOptionChangeValue(): void;
  /**
   * Focuses the dropdown option
   */
  focusable: boolean;
  inputEl: HTMLInputElement;
  /**
   * Get the text content of the slot and assign to label prop
   */
  el: HTMLElement;
  componentWillLoad(): void;
  /**
   * The `orion-dropdown` component will toggle the checked prop
   */
  watchChecked(newValue: boolean, oldValue: boolean): void;
  render(): any;
}
