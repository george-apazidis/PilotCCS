import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot default - default slot for the checkbox label
 */
export declare class OrionCheckbox {
  /**
   * The input value
   */
  value: string;
  /**
   * The checked state of the checkbox
   */
  checked: boolean;
  /**
   * The input name
   */
  name: string;
  /**
   * Disables interactions
   */
  disabled: boolean;
  /**
   * Required attribute
   */
  required: boolean;
  /**
   * CustomEvent `detail` will be the new value
   */
  valueChanged: EventEmitter<{
    value: string;
    checked: boolean;
  }>;
  private onCheckboxChangeValue;
  render(): any;
}
