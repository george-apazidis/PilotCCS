import { Host, h } from '@stencil/core';
export class OrionCheckboxGroup {
  constructor() {
    this.inline = false;
    this.disabled = false;
  }
  /**
   * A getter that returns an array of `orion-toggles` that are in the slot
   */
  get checkboxes() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-CHECKBOX');
  }
  componentDidLoad() {
    if (this.disabled) {
      this.setCheckboxGroupDisabled();
    }
  }
  /**
   * Disable all checkboxes in group
   */
  setCheckboxGroupDisabled() {
    this.checkboxes.forEach(checkbox => {
      checkbox.setAttribute('disabled', '');
    });
  }
  render() {
    return (h(Host, null, h("span", { class: `orion-checkbox-group
          ${this.inline ? 'orion-checkbox-group--inline' : ''}` }, h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
  static get is() { return "orion-checkbox-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-checkbox-group.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-checkbox-group.css"]
    };
  }
  static get properties() {
    return {
      "inline": {
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
          "text": "\nThe inline state of the checkbox group"
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Disable all checkboxes in group"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
