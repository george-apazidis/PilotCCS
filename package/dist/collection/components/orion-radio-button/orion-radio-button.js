import { h } from '@stencil/core';
/**
 * @slot default - default slot for the radio button label
 */
export class OrionRadioButton {
  constructor() {
    this.name = 'radio';
    this.disabled = false;
    this.value = '';
    this.checked = false;
    this.required = false;
    this.focusable = false;
  }
  onRadioChangeValue() {
    this.checked = true;
    this.radioButtonChanged.emit({ value: this.value });
  }
  /**
   * The `orion-radio-button-group` component will toggle the checked prop
   */
  watchChecked(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.inputEl.checked = newValue;
    }
  }
  render() {
    return (h("label", { class: `orion-radio__label 
          ${this.disabled ? 'orion-radio__label--disabled' : ''}` }, h("span", null, h("input", { type: "radio", name: this.name, disabled: this.disabled, checked: this.checked, tabIndex: -1, value: this.value, ref: el => {
        this.inputEl = el;
      }, onChange: this.onRadioChangeValue.bind(this) }), h("span", { class: "orion-radio__input" })), h("slot", null)));
  }
  static get is() { return "orion-radio-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-radio-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-radio-button.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The input name"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'radio'"
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
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The checked state of the radio button"
        },
        "attribute": "checked",
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
      "focusable": {
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
          "text": "Focuses the radio button. This method is used internally by the `orion-radio-button-group` component. Do not use it directly. Use the `orion-radio-button-group` component instead."
        },
        "attribute": "focusable",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "radioButtonChanged",
        "name": "radioButtonChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emit `radioButtonChanged` event that `orion-radio-button-group` can listen for"
        },
        "complexType": {
          "original": "{ value: string }",
          "resolved": "{ value: string; }",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "watchChecked"
      }];
  }
}
