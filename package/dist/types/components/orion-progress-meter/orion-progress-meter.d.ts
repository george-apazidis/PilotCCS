export declare type OrionSizeOptions = 'small' | 'medium' | 'large';
export declare class OrionProgressMeter {
  /**
   * The current value
   */
  value: number;
  /**
   * The maximum possible value
   */
  max: number;
  /**
   * The target value
   */
  target: number;
  /**
   * The percent of target value where progress meter color will change from error to warn (decimal value between 0 and 1)
   */
  percentOfTarget: number;
  /**
   * Shows progress meter in circle format
   */
  isCircle: boolean;
  /**
   * Display value in center of circle
   */
  showValue: boolean;
  /**
   * The circle size
   */
  size: OrionSizeOptions;
  /**
   * Amount of segments to divide progress meter into
   */
  segments: number;
  oddSegments: boolean;
  getCSSStyle(): {
    background: string;
  };
  getSegmentCSSStyle(): {
    outline: string;
  };
  getCircleSegmentCSSStyle(): {
    background: string;
    backgroundColor?: undefined;
  } | {
    backgroundColor: string;
    background?: undefined;
  };
  render(): any;
}
