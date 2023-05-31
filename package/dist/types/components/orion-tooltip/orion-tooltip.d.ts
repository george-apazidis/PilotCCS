/**
 * @slot default - default slot for the tooltip trigger
 * @slot orion-tooltip-body - slot for body content
 */
export declare class OrionTooltip {
  uid: string;
  placeholder: HTMLElement;
  dropdown: HTMLElement;
  timeout: number;
  delay: boolean;
  tooltipWidth: number;
  tooltipPosition: 'top' | 'bottom';
  open: boolean;
  el: HTMLElement;
  handleResize(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  _openTooltip(): void;
  _closeTooltip(delay?: boolean): void;
  _onKeyDown(event: KeyboardEvent): void;
  _handleDropdownPosition(): void;
  render(): any;
}
