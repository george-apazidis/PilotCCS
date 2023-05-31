import { h } from '@stencil/core';
import classnames from 'classnames';
/**
 * @slot default - default slot for label content
 * @slot orion-label-conditional - slot for conditional text
 */
export class OrionLabel {
  constructor() {
    this.hasConditionalSlot = false;
    this.disabled = false;
    this.error = false;
  }
  getCSSClass() {
    return classnames('orion-label__label', // this class is always applied
    {
      'orion-label__label--disabled': this.disabled,
      'orion-label__label--error': this.error, // this class is applied if the error prop is true
    });
  }
  componentWillLoad() {
    this.hasConditionalSlot = !!this.el.querySelector('[slot="orion-label-conditional"]');
  }
  render() {
    return (h("div", { class: "orion-label" }, 
    /* Disabling eslint for the next line because this component is meant to wrap a label around
     * a control which will be inserted into the slot
     */
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    h("label", { class: this.getCSSClass() }, h("slot", null)), this.hasConditionalSlot ? (h("span", { class: "orion-label__conditional" }, h("slot", { name: "orion-label-conditional" }))) : null));
  }
  static get is() { return "orion-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-label.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-label.css"]
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
          "text": "Shows the disabled state"
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
          "text": "Shows the error state"
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
}
