import { h, Fragment } from '@stencil/core';
/**
 * @slot orion-list-item-image - Slot for list item image
 * @slot orion-list-item-heading - Slot for list item heading
 * @slot orion-list-item-subheading - Slot for list item subheading
 * @slot orion-list-item-body - Slot for list item body
 * @slot - Unnamed default slot for list item content
 */
export class OrionListItem {
  constructor() {
    this.hasImageSlot = false;
    this.hasHeadingSlot = false;
    this.hasSubHeadingSlot = false;
    this.hasBodySlot = false;
    this.disabled = false;
    this.hasMarker = false;
    this.hasIcon = false;
    this.iconName = '';
    this.hasTrailingIcon = false;
    this.trailingIconName = 'chevron_right';
    this.href = '';
  }
  componentWillLoad() {
    this.hasImageSlot = !!this.el.querySelector('[slot="orion-list-item-image"]');
    this.hasHeadingSlot = !!this.el.querySelector('[slot="orion-list-item-heading"]');
    this.hasSubHeadingSlot = !!this.el.querySelector('[slot="orion-list-item-subheading"]');
    this.hasBodySlot = !!this.el.querySelector('[slot="orion-list-item-body"]');
    if (this.href !== '') {
      this.hasTrailingIcon = true;
    }
    if (this.disabled) {
      this.href = '';
    }
  }
  render() {
    // create fragment to hold the list item content
    const component = (h(Fragment, null, this.hasMarker ? (h("span", { class: "orion-list-item__marker-container" }, h("span", { class: "orion-list-item__marker" }))) : null, this.hasIcon && this.iconName !== '' ? (h("span", { class: "orion-list-item__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName}` }))) : null, this.hasImageSlot ? (h("span", { class: "orion-list-item__image" }, h("slot", { name: "orion-list-item-image" }))) : null, h("span", { class: "orion-list-item__content" }, this.hasHeadingSlot ? (h("span", { class: "orion-list-item__heading" }, h("slot", { name: "orion-list-item-heading" }))) : null, this.hasSubHeadingSlot ? (h("span", { class: "orion-list-item__subheading" }, h("slot", { name: "orion-list-item-subheading" }))) : null, this.hasBodySlot ? (h("span", null, h("slot", { name: "orion-list-item-body" }))) : null, h("slot", null)), this.hasTrailingIcon && this.trailingIconName !== '' ? (h("span", { class: "orion-list-item__trailing-icon" }, h("i", { class: `orion-icon orion-icon-${this.trailingIconName}` }))) : null));
    // if href prop is set, wrap the list item content in an anchor tag, if not, just return the list item content
    return (h("li", { class: `orion-list-item ${this.disabled ? 'orion-list-item--disabled' : ''}` }, this.href ? (h("a", { href: this.href, class: "orion-list-item__link" }, component)) : (component)));
  }
  static get is() { return "orion-list-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-list-item.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-list-item.css"]
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
          "text": "Disables the list item"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "hasMarker": {
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
          "text": "Adds a marker to the list item"
        },
        "attribute": "has-marker",
        "reflect": false,
        "defaultValue": "false"
      },
      "hasIcon": {
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
          "text": "Adds an icon to the list item"
        },
        "attribute": "has-icon",
        "reflect": false,
        "defaultValue": "false"
      },
      "iconName": {
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
          "text": "Name of the icon to be added to the list item"
        },
        "attribute": "icon-name",
        "reflect": false,
        "defaultValue": "''"
      },
      "hasTrailingIcon": {
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
          "text": "Adds a trailing icon to the list item. The href property will add a trailing icon automatically"
        },
        "attribute": "has-trailing-icon",
        "reflect": false,
        "defaultValue": "false"
      },
      "trailingIconName": {
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
          "text": "Name of the trailing icon to be added to the list item. Deaults to chevron_right"
        },
        "attribute": "trailing-icon-name",
        "reflect": false,
        "defaultValue": "'chevron_right'"
      },
      "href": {
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
          "text": "Adds a link to the list item. Trailing icon will be added automatically"
        },
        "attribute": "href",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get elementRef() { return "el"; }
}
