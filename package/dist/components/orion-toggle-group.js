import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const orionToggleGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-toggle-group{position:relative;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}.orion-toggle-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-toggle-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionToggleGroup$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return orionToggleGroupCss; }
}, [1, "orion-toggle-group", {
    "inline": [4],
    "justify": [4],
    "disabled": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-toggle-group"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-toggle-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionToggleGroup$1);
      }
      break;
  } });
}

const OrionToggleGroup = OrionToggleGroup$1;
const defineCustomElement = defineCustomElement$1;

export { OrionToggleGroup, defineCustomElement };
