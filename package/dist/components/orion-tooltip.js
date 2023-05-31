import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { g as generateUUID } from './utils.js';

const orionTooltipCss = "orion-tooltip{}orion-tooltip html,orion-tooltip body,orion-tooltip p,orion-tooltip ol,orion-tooltip ul,orion-tooltip li,orion-tooltip dl,orion-tooltip dt,orion-tooltip dd,orion-tooltip blockquote,orion-tooltip figure,orion-tooltip fieldset,orion-tooltip legend,orion-tooltip textarea,orion-tooltip pre,orion-tooltip iframe,orion-tooltip hr,orion-tooltip h1,orion-tooltip h2,orion-tooltip h3,orion-tooltip h4,orion-tooltip h5,orion-tooltip h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}orion-tooltip h1,orion-tooltip h2,orion-tooltip h3,orion-tooltip h4,orion-tooltip h5,orion-tooltip h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}orion-tooltip ul{list-style:none}orion-tooltip button,orion-tooltip input,orion-tooltip select,orion-tooltip textarea{margin:0}orion-tooltip img,orion-tooltip embed,orion-tooltip iframe,orion-tooltip object,orion-tooltip audio,orion-tooltip video{max-width:100%;height:auto}orion-tooltip iframe{border:0}orion-tooltip table{border-spacing:0;border-collapse:collapse}orion-tooltip td,orion-tooltip th{padding:0;text-align:left}orion-tooltip html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}orion-tooltip body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}orion-tooltip *::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-tooltip *::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}orion-tooltip a,orion-tooltip a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-tooltip a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}orion-tooltip a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-tooltip a:focus:not(:focus-visible){outline:none}orion-tooltip a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}orion-tooltip a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}orion-tooltip a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}orion-tooltip a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}orion-tooltip a,orion-tooltip button{cursor:pointer}orion-tooltip h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}orion-tooltip h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}orion-tooltip h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}orion-tooltip h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-tooltip label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip p,orion-tooltip li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}orion-tooltip small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}orion-tooltip sup,orion-tooltip sub{vertical-align:baseline;position:relative;top:-0.4em}orion-tooltip sub{top:0.4em}orion-tooltip strong,orion-tooltip b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){orion-tooltip body{font-size:var(--orion-font-size-body, 16px)}orion-tooltip h5{font-size:var(--orion-font-size-title5, 16px)}orion-tooltip label{font-size:var(--orion-font-size-label, 16px)}orion-tooltip p,orion-tooltip li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){orion-tooltip a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}.tooltip-wrapper{position:relative;display:inline-block}.tooltip-wrapper:hover{cursor:pointer}.tooltip-wrapper:focus{outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.tooltip-wrapper:focus:not(:focus-visible){outline:none}.tooltip-wrapper:focus-visible{color:var(--orion-color-activation, #6244bb);outline:var(--orion-border-thick, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}.orion-tooltip{visibility:hidden;opacity:0;position:absolute;background-color:var(--orion-rhapsody-blue, #024);min-height:10px;min-width:10px;max-width:456px;color:var(--orion-white, #fff);border:var(--orion-border-standard, 1px solid) var(--orion-white, #fff);border-radius:var(--orion-border-radius, 4px);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-weight:var(--orion-font-weight-semi-bold, 600);padding:var(--orion-space-md, 8px);box-sizing:border-box;cursor:initial;transition:var(--orion-transition, 200ms ease-in-out);z-index:var(--orion-z-mid, 100)}.open{visibility:visible;opacity:1}.orion-tooltip.bottom{left:50%;transform:translate(-50%, 8px)}.orion-tooltip.top{left:50%;bottom:0;transform:translate(-50%, -30px)}";

const OrionTooltip$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get style() { return orionTooltipCss; }
}, [4, "orion-tooltip", {
    "tooltipWidth": [514, "tooltip-width"],
    "tooltipPosition": [1537, "tooltip-position"],
    "open": [32]
  }, [[9, "resize", "handleResize"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionTooltip$1);
      }
      break;
  } });
}

const OrionTooltip = OrionTooltip$1;
const defineCustomElement = defineCustomElement$1;

export { OrionTooltip, defineCustomElement };
