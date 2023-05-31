import { EventEmitter } from '../../stencil-public-runtime';
export declare class OrionRadioButtonGroup {
  /**
   * form name of radio buttons
   */
  name: string;
  /**
   * value of currently checked radio button
   */
  value: string;
  slotEl: HTMLSlotElement;
  /**
   * Disabled radio group
   */
  disabled: boolean;
  /**
   * Required attribute
   */
  required: boolean;
  /**
   * The inline display of the radio group
   */
  inline: boolean;
  /**
   * A getter that returns an array of `orion-radio-buttons` that are in the slot
   */
  get radioButtons(): HTMLOrionRadioButtonElement[];
  /**
   * Emits event that users can listen to
   */
  valueChanged: EventEmitter<{
    value: string;
  }>;
  /**
   * Listen to the `radioButtonChanged` event emitted by the
   * `orion-radio-button` component and update
   */
  onRadioChanged(event: CustomEvent<{
    value: string;
  }>): void;
  /**
   * When the component is initially loaded, set the checked
   * radio button according to `value` and update the `name`
   */
  componentDidLoad(): void;
  /**
   * Check to see if any radio buttons are checked.
   * If not, make the first one focusable
   */
  makeFirstFocusableIfNoneChecked(): void;
  /**
   * Update value and emit update
   */
  updateValue(value: string): void;
  /**
   * Set the name on all the radio buttons
   */
  setRadioButtonName(): void;
  /**
   * Disable all radio buttons in group
   */
  setRadioButtonGroupDisabled(): void;
  /**
   * Set the radio button with the selected value to be checked.
   * All other radio buttons will be unchecked
   */
  setRadioButtonStateByValue(selectedValue: string): void;
  /**
   * Set the radio button at the selected index to be checked.
   * All other radio buttons will be unchecked
   */
  setRadioButtonStateByIndex(selectedIndex: number): void;
  /**
   *
   * Gets the index of the currently checked radio button
   */
  getCheckedIndex(): number;
  /**
   * Move checked to the next radio button
   */
  nextRadio(): void;
  /**
   * Move checked to the previous radio button
   */
  prevRadio(): void;
  /**
   * Handle keyboard navigation, move to previous/next radio button
   */
  handleKeyPress(event: KeyboardEvent): void;
  render(): any;
}
