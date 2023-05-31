import { Host, h } from '@stencil/core';
export class OrionToggleGroup {
  constructor() {
    this.inline = false;
    this.justify = false;
    this.disabled = false;
  }
  /**
   * A getter that returns an array of `orion-toggles` that are in the slot
   */
  get toggles() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-TOGGLE');
  }
  componentDidLoad() {
    if (this.disabled) {
      this.setToggleGroupDisabled();
    }
    if (this.justify) {
      this.setToggleGroupJustify();
    }
  }
  /**
   * Disable all toggless in group
   */
  setToggleGroupDisabled() {
    this.toggles.forEach(toggle => {
      toggle.setAttribute('disabled', '');
    });
  }
  /**
   * Justify the content of the toggle group
   */
  setToggleGroupJustify() {
    this.toggles.forEach(toggle => {
      toggle.setAttribute('justify', '');
    });
  }
  render() {
    return (h(Host, null, h("span", { class: `orion-toggle-group 
          ${this.inline ? 'orion-toggle-group--inline' : ''}` }, h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
  static get is() { return "orion-toggle-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-toggle-group.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-toggle-group.css"]
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
          "text": "The inline state of the toggle group"
        },
        "attribute": "inline",
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
          "text": "Justify the content of the toggle group"
        },
        "attribute": "justify",
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
          "text": "Disable all toggles in group"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
