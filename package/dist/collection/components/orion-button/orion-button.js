import { h } from '@stencil/core';
import classnames from 'classnames';
export class OrionButton {
  constructor() {
    this.hasText = false;
    this.iconSize = 24;
    this.type = 'button';
    this.variant = 'secondary';
    this.disabled = false;
    this.small = false;
    this.sticky = false;
    this.iconName = '';
    this.iconRight = false;
    this.isMobile = false;
  }
  componentWillLoad() {
    this.hasText = this.el.innerHTML !== '';
    this.setIsMobile();
  }
  handleResize() {
    this.setIsMobile();
  }
  componentWillRender() {
    if (this.isMobile) {
      this.iconSize = this.small ? 20 : 24;
    }
    else {
      this.iconSize = this.small ? 16 : 20;
    }
  }
  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
  getCSSClass() {
    return classnames(`orion-button orion-button--${this.variant}`, // this class is always applied
    {
      'orion-button--small orion-button--no-text': !this.hasText && this.small,
      'orion-button--no-text': !this.hasText,
      'orion-button--small': this.small,
      'orion-button--sticky': this.sticky, // this class is applied if the button is sticky
    });
  }
  render() {
    let inlineCSSFontSize = {};
    inlineCSSFontSize = {
      fontSize: `${this.iconSize}px`,
    };
    return (h("button", { class: this.getCSSClass(), type: this.type, disabled: this.disabled }, this.iconName !== '' && !this.iconRight ? (h("span", { class: "orion-button__icon" }, h("i", { class: `orion-icon-${this.iconName}`, style: inlineCSSFontSize }))) : null, this.hasText ? h("slot", null) : null, this.iconName !== '' && this.iconRight ? (h("span", { class: "orion-button__icon" }, h("i", { class: `orion-icon-${this.iconName}`, style: inlineCSSFontSize }))) : null));
  }
  static get is() { return "orion-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-button.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-button.css"]
    };
  }
  static get properties() {
    return {
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OrionButtonTypeOptions",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {
            "OrionButtonTypeOptions": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The button type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OrionButtonVariantOptions",
          "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "OrionButtonVariantOptions": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The button variant"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'secondary'"
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
          "text": "The disabled state"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "small": {
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
          "text": "The small state"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      },
      "sticky": {
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
          "text": "The sticky state"
        },
        "attribute": "sticky",
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
          "text": "The icon name"
        },
        "attribute": "icon-name",
        "reflect": false,
        "defaultValue": "''"
      },
      "iconRight": {
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
        "attribute": "icon-right",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isMobile": {}
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleResize",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
