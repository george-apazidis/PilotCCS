/**
 * @slot orion-list-item-image - Slot for list item image
 * @slot orion-list-item-heading - Slot for list item heading
 * @slot orion-list-item-subheading - Slot for list item subheading
 * @slot orion-list-item-body - Slot for list item body
 * @slot - Unnamed default slot for list item content
 */
export declare class OrionListItem {
  hasImageSlot: boolean;
  hasHeadingSlot: boolean;
  hasSubHeadingSlot: boolean;
  hasBodySlot: boolean;
  el: HTMLElement;
  /**
   * Disables the list item
   */
  disabled: boolean;
  /**
   * Adds a marker to the list item
   */
  hasMarker: boolean;
  /**
   * Adds an icon to the list item
   */
  hasIcon: boolean;
  /**
   * Name of the icon to be added to the list item
   */
  iconName: string;
  /**
   * Adds a trailing icon to the list item. The href property will add a trailing icon automatically
   */
  hasTrailingIcon: boolean;
  /**
   * Name of the trailing icon to be added to the list item. Deaults to chevron_right
   */
  trailingIconName: string;
  /**
   * Adds a link to the list item. Trailing icon will be added automatically
   */
  href: string;
  componentWillLoad(): void;
  render(): any;
}
