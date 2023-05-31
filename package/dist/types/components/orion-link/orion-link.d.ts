export declare type OrionLinkTargetOptions = '_blank' | '_self' | '_parent' | '_top' | 'framename';
export declare class OrionLink {
  /**
   * The link href
   */
  href: string;
  /**
   * The link disabled state
   */
  disabled: boolean;
  /**
   * The link target
   */
  target: OrionLinkTargetOptions;
  /**
   * The link rel
   */
  rel: string;
  /**
   * The link download
   */
  download: string;
  /**
   * The icon name
   */
  iconName: string;
  /**
   * The icon position
   */
  iconLeft: boolean;
  /**
   * No underline
   */
  noUnderline: boolean;
  componentWillLoad(): void;
  getCSSClass(): string;
  render(): any;
}
