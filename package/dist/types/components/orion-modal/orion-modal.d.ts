import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot orion-modal-title - slot for title
 * @slot orion-modal-body - slot for body content
 * @slot orion-modal-footer-left - slot for left aligned footer content
 * @slot orion-modal-footer-center - slot for center aligned footer content
 * @slot orion-modal-footer-right - slot for right aligned footer content
 * @slot orion-modal-primary-button - slot for primary button
 * @slot orion-modal-secondary-button - slot for secondary button
 * @slot orion-modal-button-row - slot for content in the button row. Displays to the left of the primary and secondary buttons in desktop and to the bottom in mobile. This slot only exists if the primary and/or secondary buttons are also present.
 */
export declare class OrionModal {
  uid: string;
  hasTitleSlot: boolean;
  hasBodySlot: boolean;
  hasFooterSlot: boolean;
  hasSecondaryButton: boolean;
  hasPrimaryButton: boolean;
  hasButtonRowSlot: boolean;
  originalPaddingRight: number;
  originalOverflow: string;
  originalHeight: string;
  el: HTMLElement;
  /**
   * Toggles the visibility of the modal
   */
  isOpen: boolean;
  /**
   * Toggles visibility of the close icon in the top right of the modal
   */
  hasCancelIcon: boolean;
  /**
   * Adds an icon to the modal header
   */
  hasIcon: boolean;
  /**
   * Name of the icon to be added to the modal header
   */
  iconName: string;
  /**
   * Set this to have the modal take up the full screen
   */
  isFullscreen: boolean;
  /**
   * Set this to have the modal take up the full screen on mobile only
   */
  isFullscreenMobile: boolean;
  /**
   * Set this to center-align the modal title
   */
  isTitleCentered: boolean;
  /**
   * Disables the secondary button
   */
  secondaryButtonDisabled: boolean;
  /**
   * Disables the primary button
   */
  primaryButtonDisabled: boolean;
  componentWillLoad(): void;
  componentDidUpdate(): void;
  handleKeydown(event: KeyboardEvent): void;
  _handleClose(): void;
  /**
   * Emits event when footer buttons are clicked
   */
  orionModalFooterBtnClicked: EventEmitter<{
    variant: string;
  }>;
  onFooterBtnClick(variant: string): void;
  getHeaderCSSClass(): string;
  getBodyCSSClass(): string;
  render(): any;
}
