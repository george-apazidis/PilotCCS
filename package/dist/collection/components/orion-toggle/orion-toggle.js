import { h } from '@stencil/core';
/**
 * @slot default - default slot for the toggle label
 */
export class OrionToggle {
  constructor() {
    this.value = '';
    this.checked = false;
    this.name = '';
    this.disabled = false;
    this.required = false;
    this.justify = false;
  }
  onToggleChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value, checked: event.target.checked });
  }
  getCSSStyle() {
    if (this.justify) {
      return {
        width: '100%',
      };
    }
    return {};
  }
  render() {
    return (h("label", { class: `orion-toggle 
          ${this.disabled ? 'orion-toggle--disabled' : ''}`, style: this.getCSSStyle() }, h("slot", null), h("input", { type: "checkbox", name: this.name, disabled: this.disabled, value: this.value, checked: this.checked, onInput: this.onToggleChangeValue.bind(this) }), h("span", { class: "orion-toggle__input" })));
  }
  static get is() { return "orion-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-toggle.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-toggle.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The checked state of the toggle"
        },
        "attribute": "checked",
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
          "text": "The input name"
        },
        "attribute": "name",
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
      "justify": {
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
          "text": "Justify the content of the toggle and label"
        },
        "attribute": "justify",
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
          "original": "{ value: string; checked: boolean }",
          "resolved": "{ value: string; checked: boolean; }",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
}
