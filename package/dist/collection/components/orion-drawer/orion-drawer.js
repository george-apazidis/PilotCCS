import { h } from '@stencil/core';
/**
 * @slot orion-drawer-title - slot for title
 * @slot orion-drawer-body - slot for body content
 * @slot orion-drawer-footer-content - slot for footer content
 * @slot orion-drawer-secondary-button - slot for secondary button
 * @slot orion-drawer-primary-button - slot for primary button
 */
export class OrionDrawer {
  constructor() {
    this.hasFooterSlot = false;
    this.hasPrimaryButton = false;
    this.hasSecondaryButton = false;
    this.originalPaddingRight = 0;
    this.originalOverflow = 'auto';
    this.originalHeight = 'auto';
    this.isOpen = false;
    this.openFrom = 'right';
  }
  componentWillLoad() {
    const footerSlot = this.el.querySelector('[slot="orion-drawer-footer-content"]');
    const secondaryButtonSlot = this.el.querySelector('[slot="orion-drawer-secondary-button"]');
    const primaryButtonSlot = this.el.querySelector('[slot="orion-drawer-primary-button"]');
    // check if slot exists check if it has content
    this.hasFooterSlot = Boolean(footerSlot === null || footerSlot === void 0 ? void 0 : footerSlot.textContent);
    this.hasSecondaryButton = Boolean(secondaryButtonSlot === null || secondaryButtonSlot === void 0 ? void 0 : secondaryButtonSlot.textContent);
    this.hasPrimaryButton = Boolean(primaryButtonSlot === null || primaryButtonSlot === void 0 ? void 0 : primaryButtonSlot.textContent);
    this.originalPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    this.originalHeight = document.body.style.height === '' ? 'auto' : document.body.style.height;
    this.originalOverflow = window.getComputedStyle(document.body).getPropertyValue('overflow');
  }
  componentDidUpdate() {
    const isMobile = window.innerWidth <= 768;
    // check only for mobile as the body scroll for desktop should be enabled
    if (isMobile && this.isOpen) {
      // get width of scrollbar
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      // add padding right to body so the content doesn't shift when scrollbar disapears
      document.body.style.paddingRight = `${this.originalPaddingRight + scrollBarWidth}px`;
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
    if (!this.isOpen) {
      // reset padding
      document.body.style.paddingRight = `${this.originalPaddingRight}px`;
      // Allow body to scroll when drawer is closed
      document.body.style.overflow = this.originalOverflow;
      document.body.style.height = this.originalHeight;
    }
  }
  _handleClose() {
    this.isOpen = false;
  }
  onFooterBtnClick(variant) {
    this.orionDrawerFooterBtnClicked.emit({ variant });
  }
  render() {
    return (h("aside", { class: `orion-drawer ${this.isOpen ? 'is-open' : ''}`, "aria-labelledby": "dialog-header", tabindex: "-1", "aria-hidden": this.isOpen ? 'false' : 'true' }, h("div", { class: "orion-drawer__header" }, h("button", { type: "button", class: "orion-drawer__close-btn", "aria-label": "Close", onClick: this._handleClose.bind(this) }, h("i", { class: `orion-icon-close` })), h("h2", null, h("slot", { name: "orion-drawer-title" }))), h("div", { class: "orion-drawer__body" }, h("slot", { name: "orion-drawer-body" })), this.hasFooterSlot || this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-drawer__footer" }, this.hasFooterSlot ? (h("div", { class: "orion-drawer__footer-content" }, h("slot", { name: "orion-drawer-footer-content" }))) : (''), this.hasSecondaryButton || this.hasPrimaryButton ? (h("div", { class: "orion-drawer__footer-buttons" }, this.hasSecondaryButton ? (h("orion-button", { class: "orion-drawer__btn-secondary", variant: "secondary", onClick: () => this.onFooterBtnClick('secondary') }, h("slot", { name: "orion-drawer-secondary-button" }))) : (''), this.hasPrimaryButton ? (h("orion-button", { class: "orion-drawer__btn-primary", variant: "primary", onClick: () => this.onFooterBtnClick('primary') }, h("slot", { name: "orion-drawer-primary-button" }))) : (''))) : (''))) : ('')));
  }
  static get is() { return "orion-drawer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-drawer.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-drawer.css"]
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
          "text": "Prop used to show/hide drawer"
        },
        "attribute": "is-open",
        "reflect": true,
        "defaultValue": "false"
      },
      "openFrom": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OrionDrawerOpenOptions",
          "resolved": "\"bottom\" | \"left\" | \"right\"",
          "references": {
            "OrionDrawerOpenOptions": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Animates drawer in from left, right, or bottom"
        },
        "attribute": "open-from",
        "reflect": false,
        "defaultValue": "'right'"
      }
    };
  }
  static get events() {
    return [{
        "method": "orionDrawerFooterBtnClicked",
        "name": "orionDrawerFooterBtnClicked",
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
}
