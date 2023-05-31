import { h } from '@stencil/core';
import classnames from 'classnames';
export class OrionTextarea {
  constructor() {
    this.disabled = false;
    this.required = false;
    this.error = false;
    this.value = '';
    this.placeholder = '';
    this.resize = false;
    this.resizeHorizontal = false;
    this.resizeVertical = false;
    this.autocorrect = 'off';
    this.autofocus = false;
    this.cols = 20;
    this.form = '';
    this.maxLength = 524288;
    this.minLength = 0;
    this.name = '';
    this.readonly = false;
    this.rows = 2;
    this.spellcheck = false;
    this.wrap = 'soft';
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value });
  }
  getCSSClass() {
    return classnames('', // this class is always applied
    {
      'orion-textarea--error orion-textarea--resize': this.error && this.resize,
      'orion-textarea--error orion-textarea--resizeX': this.error && this.resizeHorizontal,
      'orion-textarea--error orion-textarea--resizeY': this.error && this.resizeVertical,
      'orion-textarea--error': this.error,
      'orion-textarea--resize': this.resize,
      'orion-textarea--resizeX': this.resizeHorizontal,
      'orion-textarea--resizeY': this.resizeVertical, // this class is applied if the resize vertical prop is true
    });
  }
  render() {
    return (h("div", { class: "orion-textarea" }, h("textarea", { class: !this.disabled ? this.getCSSClass() : '', value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autocorrect: this.autocorrect, autofocus: this.autofocus, cols: this.cols, form: this.form, maxLength: this.maxLength, minLength: this.minLength, name: this.name, readOnly: this.readonly, rows: this.rows, spellcheck: this.spellcheck, wrap: this.wrap })));
  }
  static get is() { return "orion-textarea"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-textarea.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-textarea.css"]
    };
  }
  static get properties() {
    return {
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Disables interactions"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Required attribute"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "error": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Shows error state"
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input value"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
      },
      "placeholder": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input placeholder"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "resize": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Shows the resize option"
        },
        "attribute": "resize",
        "reflect": false,
        "defaultValue": "false"
      },
      "resizeHorizontal": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Shows the resize horizonal-only option"
        },
        "attribute": "resize-horizontal",
        "reflect": false,
        "defaultValue": "false"
      },
      "resizeVertical": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Shows the resize vertical-only option"
        },
        "attribute": "resize-vertical",
        "reflect": false,
        "defaultValue": "false"
      },
      "autocorrect": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "autocorrect",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autofocus": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "cols": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "cols",
        "reflect": false,
        "defaultValue": "20"
      },
      "form": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "form",
        "reflect": false,
        "defaultValue": "''"
      },
      "maxLength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "max-length",
        "reflect": false,
        "defaultValue": "524288"
      },
      "minLength": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "min-length",
        "reflect": false,
        "defaultValue": "0"
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "readonly": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "rows": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "rows",
        "reflect": false,
        "defaultValue": "2"
      },
      "spellcheck": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "spellcheck",
        "reflect": false,
        "defaultValue": "false"
      },
      "wrap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "* Same as for [HTML `textarea` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)"
        },
        "attribute": "wrap",
        "reflect": false,
        "defaultValue": "'soft'"
      }
    };
  }
  static get events() {
    return [{
        "method": "valueChanged",
        "name": "valueChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "CustomEvent `detail` will be the new value"
        },
        "complexType": {
          "original": "{ value: string }",
          "resolved": "{ value: string; }",
          "references": {}
        }
      }];
  }
}
