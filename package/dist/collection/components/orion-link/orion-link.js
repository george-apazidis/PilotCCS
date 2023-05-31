import { h } from '@stencil/core';
import classnames from 'classnames';
export class OrionLink {
  constructor() {
    this.href = '';
    this.disabled = false;
    this.target = '_self';
    this.rel = '';
    this.download = '';
    this.iconName = '';
    this.iconLeft = false;
    this.noUnderline = false;
  }
  componentWillLoad() {
    /* Disable link if href is not provided */
    if (this.href === '') {
      console.warn('orion-link: href is required');
      this.disabled = true;
    }
  }
  getCSSClass() {
    return classnames('orion-link', // Default class
    {
      'orion-link--disabled': this.disabled,
      'orion-link--no-underline': this.iconName !== '' || this.noUnderline, // No underline class if icon is present or noUnderline is true
    });
  }
  render() {
    return (h("a", Object.assign({}, (this.disabled ? null : { href: this.href }), { target: this.target, rel: this.rel, download: this.download, class: this.getCSSClass() }), this.iconName !== '' && this.iconLeft ? (h("span", { class: "orion-link__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName} left` }))) : null, h("slot", null), this.iconName !== '' && !this.iconLeft ? (h("span", { class: "orion-link__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName} right` }))) : null));
  }
  static get is() { return "orion-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-link.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-link.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The link href"
        },
        "attribute": "href",
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
          "text": "The link disabled state"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OrionLinkTargetOptions",
          "resolved": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | \"framename\"",
          "references": {
            "OrionLinkTargetOptions": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The link target"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "'_self'"
      },
      "rel": {
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
          "text": "The link rel"
        },
        "attribute": "rel",
        "reflect": false,
        "defaultValue": "''"
      },
      "download": {
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
          "text": "The link download"
        },
        "attribute": "download",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "The icon name"
        },
        "attribute": "icon-name",
        "reflect": false,
        "defaultValue": "''"
      },
      "iconLeft": {
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
          "text": "The icon position"
        },
        "attribute": "icon-left",
        "reflect": false,
        "defaultValue": "false"
      },
      "noUnderline": {
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
          "text": "No underline"
        },
        "attribute": "no-underline",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
