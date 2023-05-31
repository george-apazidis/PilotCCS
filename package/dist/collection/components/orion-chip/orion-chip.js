import { h, Host } from '@stencil/core';
/**
 * @slot default - default slot for chip content
 */
export class OrionChip {
  constructor() {
    this.variant = 'info';
    this.dismissible = false;
    this.isOpen = false;
    this.solidBg = false;
  }
  _handleClose() {
    this.isOpen = false;
  }
  /**
   * Handle closing the chip via keyboard
   */
  handleKeyPress(event) {
    // if the user presses escape, space, or enter, close the chip
    if (event.key === 'Escape' || event.code === 'Space' || event.key === 'Enter') {
      this.isOpen = false;
    }
  }
  render() {
    const variantClass = this.variant ? `orion-chip--${this.variant}` : '';
    const iconConfigMap = {
      high: {
        color: 'red',
        dismissibleSolidColor: 'white',
      },
      medium: {
        color: 'orange',
        dismissibleSolidColor: 'black',
      },
      low: {
        color: 'yellow',
        dismissibleSolidColor: 'black',
      },
      success: {
        color: 'green',
        dismissibleSolidColor: 'white',
      },
      info: {
        color: 'rhapsody-blue',
        dismissibleSolidColor: 'white',
      },
      custom: {
        color: '',
        dismissibleSolidColor: '',
      },
    };
    const iconConfig = iconConfigMap[this.variant] || iconConfigMap.info;
    const iconColor = this.dismissible ? iconConfig.dismissibleSolidColor : iconConfig.color;
    const component = (
    // TODO: address the eslint accessbility error below
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    h("button", { class: `orion-chip ${variantClass}  ${this.isOpen ? 'is-open' : ''} ${this.solidBg ? 'orion-chip--solid-bg' : ''}    `, "aria-hidden": this.isOpen ? 'false' : 'true', tabindex: this.dismissible ? '1' : '-1' }, h("span", { class: "orion-chip__label" }, h("slot", null)), this.dismissible ? (h("span", { class: "orion-chip__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, h("i", { class: `orion-icon orion-icon-cancel ${this.solidBg && this.variant != 'custom' ? iconColor : ''}` }))) : ('')));
    return h(Host, null, component);
  }
  static get is() { return "orion-chip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-chip.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-chip.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "OrionChipVariantOptions",
          "resolved": "\"custom\" | \"high\" | \"info\" | \"low\" | \"medium\" | \"success\"",
          "references": {
            "OrionChipVariantOptions": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Stylistic variations for the chip type.\n- **success** - results in a green chip\n- **high** - results in a red chip\n- **medium** - results in an orange chip\n- **low** - results in a yellow chip\n- **info** - results in a blue chip\n- **custom** - results in a custom color chip (see `--orion-chip-color__bg` and `--orion-chip-color__text` css variables)"
        },
        "attribute": "variant",
        "reflect": true,
        "defaultValue": "'info'"
      },
      "dismissible": {
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
          "text": "Toggles the ability to dismiss the chip via a close button on right of the chip"
        },
        "attribute": "dismissible",
        "reflect": true,
        "defaultValue": "false"
      },
      "isOpen": {
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
          "text": "Prop used to show/hide chip"
        },
        "attribute": "is-open",
        "reflect": true,
        "defaultValue": "false"
      },
      "solidBg": {
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
          "text": "Prop used to to display a solid background color"
        },
        "attribute": "solid-bg",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyPress",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
