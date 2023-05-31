import { EventEmitter } from '../../stencil-public-runtime';
export declare class OrionStepper {
  /**
   * Disables interactions
   */
  disabled: boolean;
  /**
   * Shows error state
   */
  error: boolean;
  /**
   * Hide the current tally
   */
  hideTally: boolean;
  /**
   * The current value
   */
  value: number;
  /**
   * Step size to increment/decrement
   */
  step: number;
  /**
   * Min value that the stepper can be decremented to
   */
  min: number;
  /**
   * Max value that the stepper can be incremented to
   */
  max: number;
  private handleKeyDown;
  /**
   * CustomEvent `detail` will be the new value
   */
  valueChanged: EventEmitter<{
    value: number;
  }>;
  private onInputChangeValue;
  subtract(): void;
  add(): void;
  isAddDisabled(): boolean;
  isSubstractDisabled(): boolean;
  isError(): boolean;
  getCSSClass(): string;
  render(): any;
}
