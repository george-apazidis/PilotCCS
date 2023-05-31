import { h } from '@stencil/core';
export class OrionTextInput {
  constructor() {
    this.type = 'text';
    this.value = '';
    this.placeholder = '';
    this.disabled = false;
    this.error = false;
    this.required = false;
    this.autocomplete = '';
    this.dirname = '';
    this.form = '';
    this.list = '';
    this.maxlength = 524288;
    this.minlength = 0;
    this.multiple = false;
    this.name = '';
    this.pattern = '';
    this.readonly = false;
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value });
  }
  render() {
    return (h("div", { class: "orion-text-input" }, h("input", { class: this.error && !this.disabled ? 'orion-text-input--error' : '', type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autoComplete: this.autocomplete, dirName: this.dirname, form: this.form, list: this.list, maxlength: this.maxlength, minlength: this.minlength, multiple: this.multiple, name: this.name, pattern: this.pattern, readOnly: this.readonly })));
  }
  static get is() { return "orion-text-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-text-input.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-text-input.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OrionTextInputTypeOptions",
          "resolved": "\"email\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"url\"",
          "references": {
            "OrionTextInputTypeOptions": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The input type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
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
      "autocomplete": {
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "autocomplete",
        "reflect": false,
        "defaultValue": "''"
      },
      "dirname": {
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "dirname",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "form",
        "reflect": false,
        "defaultValue": "''"
      },
      "list": {
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "list",
        "reflect": false,
        "defaultValue": "''"
      },
      "maxlength": {
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "maxlength",
        "reflect": false,
        "defaultValue": "524288"
      },
      "minlength": {
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "minlength",
        "reflect": false,
        "defaultValue": "0"
      },
      "multiple": {
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "pattern": {
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "pattern",
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
          "text": "* Same as for [HTML `input` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
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
