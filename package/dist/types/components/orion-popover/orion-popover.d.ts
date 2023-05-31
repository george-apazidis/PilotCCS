import { createPopper } from '@popperjs/core';
/**
 * @slot default - default slot for the popover trigger
 * @slot orion-popover-title - slot for popover title
 * @slot orion-popover-body - slot for body content
 */
export declare class OrionPopover {
  uid: string;
  popperInstance: ReturnType<typeof createPopper>;
  wrapper: HTMLElement;
  trigger: HTMLElement;
  popover: HTMLElement;
  isOpen: boolean;
  popperPadding: number;
  hasTitleSlot: boolean;
  hasBodySlot: boolean;
  el: HTMLElement;
  /**
   * width should be between 100px and 640px
   */
  popperWidth: number;
  /**
   * The placement of the popper relative to its trigger
   */
  placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
  originalWidth: number;
  mouseDownFlag: boolean;
  handleResize(): void;
  closeWhenFocused(e: Event): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  _hidePopover(): void;
  _showPopover(): void;
  _handleWidth(): void;
  _setClickFlag(): void;
  _handleClose(): void;
  _onKeyDown(event: KeyboardEvent): void;
  _triggerClick(e: MouseEvent): void;
  _onFocusOut(): void;
  render(): any;
}
