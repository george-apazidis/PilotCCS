import { EventEmitter } from '../../stencil-public-runtime';
export declare class OrionDropdown {
  /**
   * form name of dropdown
   */
  name: string;
  /**
   * value of currently selected option
   */
  value: string;
  slotEl: HTMLSlotElement;
  /**
   * Disabled state of dropdown
   */
  disabled: boolean;
  /**
   * Required attribute
   */
  required: boolean;
  /**
   * Error state of dropdown
   */
  error: boolean;
  placeholder: string;
  summary: string;
  isOpen: boolean;
  el: HTMLElement;
  mouseDown: boolean;
  listBoxUID: string;
  /**
   * A getter that returns an array of `orion-dropdown-options` that are in the slot
   */
  get dropdownOptions(): HTMLOrionDropdownOptionElement[];
  /**
   * Emits event that users can listen to
   */
  valueChanged: EventEmitter<{
    value: string;
  }>;
  /**
   * Listen to the `dropdownOptionChanged` event emitted by the
   * `orion-dropdown-option` component and update
   */
  onOptionChanged(event: CustomEvent<{
    value: string;
    label: string;
  }>): void;
  componentWillLoad(): void;
  /**
   * When the component is initially loaded, set the checked
   * dropdown option according to `value` and update the `name`
   */
  componentDidLoad(): void;
  /**
   * Check to see if any dropdown options are checked.
   * If not, make the first one focusable
   */
  makeFirstFocusableIfNoneChecked(): void;
  /**
   * Update value and emit update
   */
  updateValue(value: string): void;
  /**
   * Set the name on all the dropdown options
   */
  setDropdownOptionName(): void;
  /**
   * Set the dropdown option with the selected value to be checked.
   * All other dropdown options will be unchecked
   */
  setDropdownOptionStateByValue(selectedValue: string): void;
  /**
   * Set the summary text based on the selected value
   */
  getSummary(value: string, label: string): void;
  /**
   * Set the dropdown option at the selected index to be checked.
   * All other dropdown options will be unchecked
   */
  setDropdownOptionStateByIndex(selectedIndex: number): void;
  /**
   *
   * Gets the index of the currently checked dropdown option
   */
  getCheckedIndex(): number;
  /**
   * Move checked to the next dropdown option
   */
  nextOption(): void;
  /**
   * Move checked to the previous dropdown option
   */
  prevOption(): void;
  /**
   * Handle keyboard navigation, move to previous/next dropdown option
   */
  handleKeyPress(event: KeyboardEvent): void;
  /**
   * Close dropdown when clicking outside of dropdown
   */
  closeDropdown(event: MouseEvent): void;
  handleMouseDown(event: Event): void;
  handleMouseUp(event: Event): void;
  getDropdownClass(): string;
  getChevronClass(): string;
  render(): any;
}
