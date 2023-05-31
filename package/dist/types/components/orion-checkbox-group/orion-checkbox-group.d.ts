export declare class OrionCheckboxGroup {
  /**
   *
   * The inline state of the checkbox group
   */
  inline: boolean;
  /**
   * Disable all checkboxes in group
   */
  disabled: boolean;
  slotEl: HTMLSlotElement;
  /**
   * A getter that returns an array of `orion-toggles` that are in the slot
   */
  get checkboxes(): HTMLOrionCheckboxElement[];
  componentDidLoad(): void;
  /**
   * Disable all checkboxes in group
   */
  setCheckboxGroupDisabled(): void;
  render(): any;
}
