export declare type OrionButtonTypeOptions = 'submit' | 'reset' | 'button';
export declare type OrionButtonVariantOptions = 'primary' | 'secondary' | 'tertiary';
export declare class OrionButton {
  /**
   * The button type
   */
  type: OrionButtonTypeOptions;
  /**
   * The button variant
   */
  variant: OrionButtonVariantOptions;
  /**
   * The disabled state
   */
  disabled: boolean;
  /**
   * The small state
   */
  small: boolean;
  /**
   * The sticky state
   */
  sticky: boolean;
  /**
   * The icon name
   */
  iconName: string;
  /**
   * The icon position
   */
  iconRight: boolean;
  hasText: boolean;
  iconSize: number;
  isMobile: boolean;
  el: HTMLElement;
  componentWillLoad(): void;
  handleResize(): void;
  componentWillRender(): void;
  setIsMobile(): void;
  getCSSClass(): string;
  render(): any;
}
