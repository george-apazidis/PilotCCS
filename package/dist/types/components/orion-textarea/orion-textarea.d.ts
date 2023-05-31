import { EventEmitter } from '../../stencil-public-runtime';
export declare class OrionTextarea {
  /**
   * Disables interactions
   */
  disabled: boolean;
  /**
   * Required attribute
   */
  required: boolean;
  /**
   * Shows error state
   */
  error: boolean;
  /**
   * The input value
   */
  value: string;
  /**
   * The input placeholder
   */
  placeholder: string;
  /**
   * Shows the resize option
   */
  resize: boolean;
  /**
   * Shows the resize horizonal-only option
   */
  resizeHorizontal: boolean;
  /**
   * Shows the resize vertical-only option
   */
  resizeVertical: boolean;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  autocorrect: string;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  autofocus: boolean;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  cols: number;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  form: string;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  maxLength: number;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  minLength: number;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  name: string;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  readonly: boolean;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  rows: number;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  spellcheck: boolean;
  /**
   * * Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
   */
  wrap: string;
  /**
   * CustomEvent `detail` will be the new value
   */
  valueChanged: EventEmitter<{
    value: string;
  }>;
  private onInputChangeValue;
  getCSSClass(): string;
  render(): any;
}
