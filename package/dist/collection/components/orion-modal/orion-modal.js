import { h } from '@stencil/core';
import classnames from 'classnames';
import { generateUUID } from '../../utils/utils';
/**
 * @slot orion-modal-title - slot for title
 * @slot orion-modal-body - slot for body content
 * @slot orion-modal-footer-left - slot for left aligned footer content
 * @slot orion-modal-footer-center - slot for center aligned footer content
 * @slot orion-modal-footer-right - slot for right aligned footer content
 * @slot orion-modal-primary-button - slot for primary button
 * @slot orion-modal-secondary-button - slot for secondary button
 * @slot orion-modal-button-row - slot for content in the button row. Displays to the left of the primary and secondary buttons in desktop and to the bottom in mobile. This slot only exists if the primary and/or secondary buttons are also present.
 */
export class OrionModal {
  constructor() {
    this.uid = '';
    this.hasTitleSlot = false;
    this.hasBodySlot = false;
    this.hasFooterSlot = false;
    this.hasSecondaryButton = false;
    this.hasPrimaryButton = false;
    this.hasButtonRowSlot = false;
    this.originalPaddingRight = 0;
    this.originalOverflow = 'auto';
    this.originalHeight = 'auto';
    this.isOpen = false;
    this.hasCancelIcon = false;
    this.hasIcon = false;
    this.iconName = '';
    this.isFullscreen = false;
    this.isFullscreenMobile = false;
    this.isTitleCentered = false;
    this.secondaryButtonDisabled = false;
    this.primaryButtonDisabled = false;
  }
  componentWillLoad() {
    this.uid = generateUUID();
    const titleSlot = this.el.querySelector('[slot="orion-modal-title"]');
    const bodySlot = this.el.querySelector('[slot="orion-modal-body"]');
    const footerLeftSlot = this.el.querySelector('[slot="orion-modal-footer-left"]');
    const footerCenterSlot = this.el.querySelector('[slot="orion-modal-footer-center"]');
    const footerRightSlot = this.el.querySelector('[slot="orion-modal-footer-right"]');
    const secondaryButtonSlot = this.el.querySelector('[slot="orion-modal-secondary-button"]');
    const primaryButtonSlot = this.el.querySelector('[slot="orion-modal-primary-button"]');
    const buttonRowSlot = this.el.querySelector('[slot="orion-modal-button-row"]');
    // check if slot exists check if it has content
    this.hasTitleSlot = Boolean(titleSlot === null || titleSlot === void 0 ? void 0 : titleSlot.textContent);
    this.hasBodySlot = Boolean(bodySlot === null || bodySlot === void 0 ? void 0 : bodySlot.textContent);
    this.hasFooterSlot = Boolean(footerLeftSlot === null || footerLeftSlot === void 0 ? void 0 : footerLeftSlot.textContent) || Boolean(footerCenterSlot === null || footerCenterSlot === void 0 ? void 0 : footerCenterSlot.textContent) || Boolean(footerRightSlot === null || footerRightSlot === void 0 ? void 0 : footerRightSlot.textContent);
    this.hasSecondaryButton = Boolean(secondaryButtonSlot === null || secondaryButtonSlot === void 0 ? void 0 : secondaryButtonSlot.textContent);
    this.hasPrimaryButton = Boolean(primaryButtonSlot === null || primaryButtonSlot === void 0 ? void 0 : primaryButtonSlot.textContent);
    this.hasButtonRowSlot = Boolean(buttonRowSlot === null || buttonRowSlot === void 0 ? void 0 : buttonRowSlot.textContent);
    this.originalPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    this.originalHeight = document.body.style.height === '' ? 'auto' : document.body.style.height;
    this.originalOverflow = window.getComputedStyle(document.body).getPropertyValue('overflow');
  }
  componentDidUpdate() {
    if (this.isOpen) {
      // get width of scrollbar
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      // add padding right to body so the content doesn't shift when scrollbar disapears
      document.body.style.paddingRight = `${this.originalPaddingRight + scrollBarWidth}px`;
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
    if (!this.isOpen) {
      // reset padding
      document.body.style.paddingRight = `${this.originalPaddingRight}px`;
      // Allow body to scroll when modal is closed
      document.body.style.overflow = this.originalOverflow;
      document.body.style.height = this.originalHeight;
    }
  }
  handleKeydown(event) {
    if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }
  _handleClose() {
    this.isOpen = false;
  }
  onFooterBtnClick(variant) {
    this.orionModalFooterBtnClicked.emit({ variant });
  }
  getHeaderCSSClass() {
    return classnames('orion-modal__title', // this class is always applied
    {
      'orion-modal__title--centered-with-icon': this.hasIcon && this.isTitleCentered,
      'orion-modal__title--centered': this.isTitleCentered, // this class is applied if the isTitleCentered prop is true
    });
  }
  getBodyCSSClass() {
    return classnames('orion-modal__body', // this class is always applied
    {
      'orion-modal__body--no-title-with-cancel': !this.hasTitleSlot && this.hasCancelIcon, // this class is applied if the hasTitleSlot prop is false and the hasCancelIcon prop is true
    });
  }
  render() {
    return (h("div", { id: this.uid, class: `orion-modal__wrapper 
          ${this.isOpen ? 'is-open' : ''}` }, h("div", { class: "orion-modal__scrim" }), h("div", { class: `orion-modal ${this.isFullscreen ? 'orion-modal--fullscreen' : ''} ${this.isFullscreenMobile ? 'orion-modal--fullscreen-mobile' : ''}  ` }, h("div", { class: "orion-modal__header" }, this.hasIcon && this.iconName !== '' ? (h("span", { class: "orion-modal__icon" }, h("i", { class: `orion-icon orion-icon-${this.iconName}` }))) : null, this.hasTitleSlot ? (h("span", { class: this.getHeaderCSSClass() }, h("slot", { name: "orion-modal-title" }))) : (''), this.hasCancelIcon ? (h("button", { type: "button", "aria-label": "Close", class: "orion-modal__close-icon", onClick: this._handleClose.bind(this) }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M12,10.3837559 L22.0490208,0.334735107 C22.4953343,-0.111578369 23.2189514,-0.111578369 23.6652649,0.334735107 C24.1115784,0.781048584 24.1115784,1.5046657 23.6652649,1.95097918 L13.6162441,12 L23.6652649,22.0490208 C24.1115784,22.4953343 24.1115784,23.2189514 23.6652649,23.6652649 C23.2189514,24.1115784 22.4953343,24.1115784 22.0490208,23.6652649 L12,13.6162441 L1.95097918,23.6652649 C1.5046657,24.1115784 0.781048584,24.1115784 0.334735107,23.6652649 C-0.111578369,23.2189514 -0.111578369,22.4953343 0.334735107,22.0490208 L10.3837559,12 L0.334735107,1.95097918 C-0.111578369,1.5046657 -0.111578369,0.781048584 0.334735107,0.334735107 C0.781048584,-0.111578369 1.5046657,-0.111578369 1.95097918,0.334735107 L12,10.3837559 Z", id: "path-1" })))) : ('')), this.hasBodySlot ? (h("div", { class: this.getBodyCSSClass() }, h("slot", { name: "orion-modal-body" }))) : (''), this.hasFooterSlot || this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-modal__footer" }, this.hasFooterSlot ? (h("div", { class: "orion-modal__footer-content" }, h("span", { class: "orion-modal__footer-left" }, h("slot", { name: "orion-modal-footer-left" })), h("span", { class: "orion-modal__footer-center" }, h("slot", { name: "orion-modal-footer-center" })), h("span", { class: "orion-modal__footer-right" }, h("slot", { name: "orion-modal-footer-right" })))) : (''), this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-modal__footer-button-row" }, this.hasButtonRowSlot ? (h("span", null, h("slot", { name: "orion-modal-button-row" }))) : (''), h("div", { class: "orion-modal__footer-buttons" }, this.hasSecondaryButton ? (h("orion-button", { class: "orion-modal__btn-secondary", variant: "secondary", disabled: this.secondaryButtonDisabled, onClick: () => this.onFooterBtnClick('secondary') }, h("slot", { name: "orion-modal-secondary-button" }))) : (''), this.hasPrimaryButton ? (h("orion-button", { class: "orion-modal__btn-primary", variant: "primary", disabled: this.primaryButtonDisabled, onClick: () => this.onFooterBtnClick('primary') }, h("slot", { name: "orion-modal-primary-button" }))) : ('')))) : (''))) : (''))));
  }
  static get is() { return "orion-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-modal.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-modal.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Toggles the visibility of the modal"
        },
        "attribute": "is-open",
        "reflect": false,
        "defaultValue": "false"
      },
      "hasCancelIcon": {
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
          "text": "Toggles visibility of the close icon in the top right of the modal"
        },
        "attribute": "has-cancel-icon",
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
          "text": "Adds an icon to the modal header"
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
          "text": "Name of the icon to be added to the modal header"
        },
        "attribute": "icon-name",
        "reflect": false,
        "defaultValue": "''"
      },
      "isFullscreen": {
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
          "text": "Set this to have the modal take up the full screen"
        },
        "attribute": "is-fullscreen",
        "reflect": false,
        "defaultValue": "false"
      },
      "isFullscreenMobile": {
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
          "text": "Set this to have the modal take up the full screen on mobile only"
        },
        "attribute": "is-fullscreen-mobile",
        "reflect": false,
        "defaultValue": "false"
      },
      "isTitleCentered": {
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
          "text": "Set this to center-align the modal title"
        },
        "attribute": "is-title-centered",
        "reflect": false,
        "defaultValue": "false"
      },
      "secondaryButtonDisabled": {
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
          "text": "Disables the secondary button"
        },
        "attribute": "secondary-button-disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "primaryButtonDisabled": {
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
          "text": "Disables the primary button"
        },
        "attribute": "primary-button-disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "orionModalFooterBtnClicked",
        "name": "orionModalFooterBtnClicked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits event when footer buttons are clicked"
        },
        "complexType": {
          "original": "{ variant: string }",
          "resolved": "{ variant: string; }",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "keyup",
        "method": "handleKeydown",
        "target": "document",
        "capture": false,
        "passive": false
      }];
  }
}
