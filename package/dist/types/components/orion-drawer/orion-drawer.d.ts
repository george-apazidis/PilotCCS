import { EventEmitter } from '../../stencil-public-runtime';
export declare type OrionDrawerOpenOptions = 'left' | 'right' | 'bottom';
/**
 * @slot orion-drawer-title - slot for title
 * @slot orion-drawer-body - slot for body content
 * @slot orion-drawer-footer-content - slot for footer content
 * @slot orion-drawer-secondary-button - slot for secondary button
 * @slot orion-drawer-primary-button - slot for primary button
 */
export declare class OrionDrawer {
  hasFooterSlot: boolean;
  hasPrimaryButton: boolean;
  hasSecondaryButton: boolean;
  originalPaddingRight: number;
  originalOverflow: string;
  originalHeight: string;
  el: HTMLElement;
  /**
   * Prop used to show/hide drawer
   */
  isOpen: boolean;
  /**
   * Animates drawer in from left, right, or bottom
   */
  openFrom: OrionDrawerOpenOptions;
  componentWillLoad(): void;
  componentDidUpdate(): void;
  _handleClose(): void;
  /**
   * Emits event when footer buttons are clicked
   */
  orionDrawerFooterBtnClicked: EventEmitter<{
    variant: string;
  }>;
  onFooterBtnClick(variant: string): void;
  render(): any;
}
