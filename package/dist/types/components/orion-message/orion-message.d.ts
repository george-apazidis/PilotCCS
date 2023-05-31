export declare type OrionMessageVariantOptions = 'success' | 'success-overlay' | 'high' | 'medium' | 'low' | 'info';
/**
 * @slot default - default slot for message content
 */
export declare class OrionMessage {
  hasSlot: boolean;
  isMobile: boolean;
  originalVariant: string;
  el: HTMLElement;
  /**
   * Stylistic variations for the message type.
   * - **success** - results in a green message
   * - **success-overlay** - results in a full screen overlay on mobile
   * - **high** - results in a red message
   * - **medium** - results in an orange message
   * - **low** - results in a yellow message
   * - **info** - results in a blue message
   */
  variant: OrionMessageVariantOptions;
  /**
   * Optional time for the mobile overlay to display in milliseconds. Default is 3000.
   */
  overlayTime: number;
  /**
   * Optional heading text for the message that appears above message body message
   */
  heading: string;
  /**
   * Toggles the ability to dismiss the message via a close button in the top right of the message
   */
  dismissible: boolean;
  /**
   * Toggles the display of the icon in the top left of the message
   */
  hasIcon: boolean;
  /**
   * Prop used to show/hide message
   */
  isOpen: boolean;
  componentWillRender(): void;
  componentDidUpdate(): void;
  _handleClose(): void;
  _handleOverlayClick(): void;
  render(): any;
}
