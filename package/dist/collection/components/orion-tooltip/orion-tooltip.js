import { h } from '@stencil/core';
import { generateUUID } from '../../utils/utils';
/**
 * @slot default - default slot for the tooltip trigger
 * @slot orion-tooltip-body - slot for body content
 */
export class OrionTooltip {
  constructor() {
    this.uid = '';
    // save a reference to the dismiss timeout
    this.timeout = 0;
    this.delay = false;
    this.tooltipWidth = 200;
    this.tooltipPosition = 'bottom';
    this.open = false;
  }
  handleResize() {
    this._handleDropdownPosition();
  }
  componentWillLoad() {
    this.uid = generateUUID();
    // if component author uses an unacceptable position then default to bottom
    if (this.tooltipPosition !== 'top' && this.tooltipPosition !== 'bottom') {
      this.tooltipPosition = 'bottom';
    }
  }
  componentDidLoad() {
    // handle position if it is outside the viewport
    this._handleDropdownPosition();
  }
  _openTooltip() {
    // clear close timeout, if exists
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
    this.open = true;
  }
  _closeTooltip(delay = true) {
    if (delay) {
      // hide the tooltip after 500ms
      this.timeout = window.setTimeout(() => {
        this.open = false;
      }, 500);
    }
    else {
      this.open = false;
    }
  }
  _onKeyDown(event) {
    if (event.key === 'Escape') {
      // this.dismissed = true;
      this._closeTooltip(false);
    }
  }
  _handleDropdownPosition() {
    const screenPadding = 16;
    const placeholderRect = this.placeholder.getBoundingClientRect();
    const dropdownRect = this.dropdown.getBoundingClientRect();
    const dropdownRightX = dropdownRect.x + dropdownRect.width;
    const placeholderRightX = placeholderRect.x + placeholderRect.width;
    // handle width if tooltip is wider than viewport
    if (this.dropdown.offsetWidth + screenPadding * 2 > document.body.clientWidth - screenPadding * 2) {
      this.tooltipWidth = document.body.clientWidth - screenPadding * 2;
    }
    // if it crops left
    if (dropdownRect.x < screenPadding) {
      this.dropdown.style.left = '0';
      this.dropdown.style.right = 'auto';
      // update position so left edge lines up with screenPadding
      if (this.tooltipPosition === 'top') {
        this.dropdown.style.transform = `translate(${-placeholderRect.x + screenPadding}px, -30px)`;
      }
      else {
        this.dropdown.style.transform = `translate(${-placeholderRect.x + screenPadding}px, 8px)`;
      }
    }
    // if it crops on right
    else if (dropdownRightX > document.body.clientWidth - screenPadding * 2) {
      this.dropdown.style.left = 'auto';
      this.dropdown.style.right = '0';
      // update position so right edge lines up with screenPadding
      if (this.tooltipPosition === 'top') {
        this.dropdown.style.transform = `translate(${document.body.clientWidth - placeholderRightX - screenPadding}px, -30px)`;
      }
      else {
        this.dropdown.style.transform = `translate(${document.body.clientWidth - placeholderRightX - screenPadding}px, 8px)`;
      }
    }
  }
  render() {
    const inlineCSS = {
      width: `${this.tooltipWidth}px`,
    };
    const { open, tooltipPosition } = this;
    return (
    // TODO: address the eslint accessibility error below
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    h("div", { class: "tooltip-wrapper", onKeyDown: this._onKeyDown.bind(this), onFocus: this._openTooltip.bind(this), onMouseEnter: this._openTooltip.bind(this), onBlur: () => this._closeTooltip(),
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      onMouseLeave: () => {
        this._closeTooltip();
      }, tabindex: "-1" }, h("span", {
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      ref: el => {
        this.placeholder = el;
      }, "data-tooltip-placeholder": true, "aria-describedby": this.uid, "aria-expanded": open ? 'true' : 'false'
    }, h("slot", null)), h("div", { ref: el => {
        this.dropdown = el;
      }, id: this.uid, style: inlineCSS, class: `orion-tooltip ${tooltipPosition} ${open ? 'open' : ''}`, "aria-label": "tooltip", "aria-hidden": open ? 'false' : 'true', "data-tooltip-dropdown": true }, h("slot", { name: "orion-tooltip-body" }))));
  }
  static get is() { return "orion-tooltip"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-tooltip.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-tooltip.css"]
    };
  }
  static get properties() {
    return {
      "tooltipWidth": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "tooltip-width",
        "reflect": true,
        "defaultValue": "200"
      },
      "tooltipPosition": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "'top' | 'bottom'",
          "resolved": "\"bottom\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "tooltip-position",
        "reflect": true,
        "defaultValue": "'bottom'"
      }
    };
  }
  static get states() {
    return {
      "open": {}
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
