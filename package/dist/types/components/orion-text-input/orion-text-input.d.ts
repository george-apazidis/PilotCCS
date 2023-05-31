import { EventEmitter } from '../../stencil-public-runtime';
export declare type OrionTextInputTypeOptions = 'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | 'number';
export declare class OrionTextInput {
  /**
   * The input type
   */
  type: OrionTextInputTypeOptions;
  /**
   * The input value
   */
  value: string;
  /**
   * The input placeholder
   */
  placeholder: string;
  /**
   * Disables interactions
   */
  disabled: boolean;
  /**
   * Shows error state
   */
  error: boolean;
  /**
   * Required attribute
   */
  required: boolean;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  autocomplete: string;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  dirname: string;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  form: string;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  list: string;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  maxlength: number;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  minlength: number;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  multiple: boolean;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  name: string;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  pattern: string;
  /**
   * * Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
   */
  readonly: boolean;
  /**
   * CustomEvent `detail` will be the new value
   */
  valueChanged: EventEmitter<{
    value: string;
  }>;
  private onInputChangeValue;
  render(): any;
}
