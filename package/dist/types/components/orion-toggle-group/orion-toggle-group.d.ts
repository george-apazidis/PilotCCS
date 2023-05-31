export declare class OrionToggleGroup {
  /**
   * The inline state of the toggle group
   */
  inline: boolean;
  /**
   * Justify the content of the toggle group
   */
  justify: boolean;
  /**
   * Disable all toggles in group
   */
  disabled: boolean;
  slotEl: HTMLSlotElement;
  /**
   * A getter that returns an array of `orion-toggles` that are in the slot
   */
  get toggles(): HTMLOrionToggleElement[];
  componentDidLoad(): void;
  /**
   * Disable all toggless in group
   */
  setToggleGroupDisabled(): void;
  /**
   * Justify the content of the toggle group
   */
  setToggleGroupJustify(): void;
  render(): any;
}
