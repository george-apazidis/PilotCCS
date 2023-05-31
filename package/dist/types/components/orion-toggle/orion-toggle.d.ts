import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot default - default slot for the toggle label
 */
export declare class OrionToggle {
  el: HTMLElement;
  /**
   * The input value
   */
  value: string;
  /**
   * The checked state of the toggle
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
  private onToggleChangeValue;
  /**
   * Justify the content of the toggle and label
   */
  justify: boolean;
  getCSSStyle(): {
    width: string;
  } | {
    width?: undefined;
  };
  render(): any;
}
