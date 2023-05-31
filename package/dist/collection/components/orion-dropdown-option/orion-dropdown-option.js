import { h } from '@stencil/core';
/**
 * @slot default - default slot for the dropdown option label
 */
export class OrionDropdownOption {
  constructor() {
    this.name = 'dropdown-option';
    this.disabled = false;
    this.value = '';
    this.label = '';
    this.checked = false;
    this.required = false;
    this.focusable = false;
  }
  onDropdownOptionChangeValue() {
    this.checked = true;
    this.dropdownOptionChanged.emit({ value: this.value, label: this.label, checked: this.checked });
  }
  componentWillLoad() {
    this.label = this.el.innerHTML;
  }
  /**
   * The `orion-dropdown` component will toggle the checked prop
   */
  watchChecked(newValue, oldValue) {
    if (newValue !== oldValue) {
      this.inputEl.checked = newValue;
    }
  }
  render() {
    return (h("label", null, h("input", { type: "radio", name: this.name, disabled: this.disabled, checked: this.checked, tabIndex: -1, "aria-selected": this.checked ? 'true' : 'false', role: "option", value: this.value, ref: el => {
        this.inputEl = el;
      }, onChange: this.onDropdownOptionChangeValue.bind(this) }), h("span", { class: `orion-dropdown__option 
        ${this.disabled ? 'orion-dropdown__option--disabled' : ''}` }, h("slot", null))));
  }
  static get is() { return "orion-dropdown-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-dropdown-option.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-dropdown-option.css"]
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
        "defaultValue": "'dropdown-option'"
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
      "label": {
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
          "text": "The label for the input element passed in as a slot"
        },
        "attribute": "label",
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
          "text": "The checked state of the dropdown option"
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
          "text": "Focuses the dropdown option"
        },
        "attribute": "focusable",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "dropdownOptionChanged",
        "name": "dropdownOptionChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emit `dropdownOptionChanged` event that `orion-dropdown` can listen for"
        },
        "complexType": {
          "original": "{ value: string; label: string; checked: boolean }",
          "resolved": "{ value: string; label: string; checked: boolean; }",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "watchChecked"
      }];
  }
}
