import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { g as generateUUID } from './utils.js';

const orionAccordionCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}button{border:none;outline:none;text-align:left;background-color:transparent}.orion-accordion__container{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:100%;margin:0;padding:0;border:none;box-shadow:inset 0 -1px 0 0 var(--orion-gray-20, #ccc);background-color:var(--orion-color-background, #fff)}.orion-accordion__container--visible{border-radius:var(--orion-border-radius, 4px);box-shadow:inset 0px 0px 0px 1px var(--orion-gray-40, #999)}.orion-accordion__header,.orion-accordion__header__title,.orion-accordion__panel{width:100%;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0}.orion-accordion__header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);font-weight:var(--orion-font-weight-semi-bold, 600);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent;cursor:pointer;outline:none;padding:var(--orion-space-xxl, 18px) 0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-accordion__container--visible .orion-accordion__header{padding:var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border-radius:var(--orion-border-radius, 4px)}.orion-accordion__header__title{flex:1}.orion-accordion__panel{font-weight:var(--orion-font-weight-normal, 400);padding:0 0 var(--orion-space-xxl, 18px) 0}.orion-accordion__container--visible .orion-accordion__panel{width:auto;padding:0 var(--orion-space-xl, 16px) var(--orion-space-xxl, 18px) var(--orion-space-xl, 16px);border-radius:var(--orion-border-radius, 4px)}.orion-accordion__icon{fill:var(--orion-color-activation, #6244bb);display:flex;flex-direction:column;justify-content:center;align-items:center;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px)}.orion-accordion__header:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-accordion__header:focus:not(:focus-visible){box-shadow:none}.orion-accordion__header:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-accordion__panel--open{display:block;height:auto}.orion-accordion__panel--closed{display:none}@media screen and (min-width: 769px){.orion-accordion__header,.orion-accordion__panel{font-size:var(--orion-font-size-body, 16px)}.orion-accordion__header{padding:var(--orion-space-md, 8px) 0}.orion-accordion__container--visible .orion-accordion__header{padding:var(--orion-space-md, 8px) var(--orion-space-xl, 16px)}.orion-accordion__header.chevron-left{flex-direction:row-reverse;justify-content:flex-end}.orion-accordion__icon{width:var(--orion-icon-size-sm, 16px);height:var(--orion-icon-size-sm, 16px);margin:var(--orion-space-xs, 4px) 0}.orion-accordion__panel{padding:0 0 var(--orion-space-xl, 16px) 0}.orion-accordion__container--visible .orion-accordion__panel{padding:0 var(--orion-space-xl, 16px) var(--orion-space-xl, 16px) var(--orion-space-xl, 16px)}}";

const OrionAccordion$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.toggle = createEvent(this, "toggle", 7);
    this.btnUid = '';
    this.sectionUid = '';
    this.open = false;
    this.chevronLeft = false;
    this.hasContainer = false;
  }
  toggleComponent() {
    this.open = !this.open;
    this.toggle.emit({ visible: this.open });
  }
  componentWillLoad() {
    if (this.open) {
      this.toggle.emit({ visible: this.open });
    }
    this.btnUid = generateUUID();
    this.sectionUid = `sect-${this.btnUid}`;
  }
  render() {
    return (h("div", { class: `orion-accordion__container ${this.hasContainer ? 'orion-accordion__container--visible' : ''}` }, h("button", { type: "button", class: `orion-accordion__header ${this.chevronLeft ? 'chevron-left' : ''}`, "aria-expanded": this.open ? 'true' : 'false', "aria-controls": this.sectionUid, id: this.btnUid, onClick: () => this.toggleComponent() }, h("span", { class: "orion-accordion__header__title" }, h("slot", { name: "orion-accordion-header" })), this.open ? (h("span", { class: "orion-accordion__icon" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M21.7250876,17.6196441 C22.2464651,18.1277218 23.0906844,18.1266464 23.6107041,17.6172421 C24.1307239,17.1078378 24.1296232,16.2830056 23.6082457,15.7749279 L12.941579,5.38035589 C12.4211626,4.8732147 11.5788374,4.8732147 11.058421,5.38035589 L0.391754315,15.7749279 C-0.129623174,16.2830056 -0.130723851,17.1078378 0.389295885,17.6172421 C0.90931562,18.1266464 1.75353487,18.1277218 2.27491236,17.6196441 L12,8.14263249 L21.7250876,17.6196441 Z", id: "path-1" })))) : (h("span", { class: "orion-accordion__icon" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M2.27491236,5.8803559 C1.75353487,5.37227816 0.90931562,5.37335356 0.389295885,5.88275787 C-0.130723851,6.39216218 -0.129623174,7.21699435 0.391754315,7.72507209 L11.058421,18.1196441 C11.5788374,18.6267853 12.4211626,18.6267853 12.941579,18.1196441 L23.6082457,7.72507209 C24.1296232,7.21699435 24.1307239,6.39216218 23.6107041,5.88275787 C23.0906844,5.37335356 22.2464651,5.37227816 21.7250876,5.8803559 L12,15.3573675 L2.27491236,5.8803559 Z", id: "path-1" }))))), h("div", { class: `orion-accordion__panel ${this.open ? 'orion-accordion__panel--open' : 'orion-accordion__panel--closed'}`, id: this.sectionUid, "aria-labelledby": this.btnUid, "aria-hidden": this.open ? 'false' : 'true', role: "region" }, h("slot", { name: "orion-accordion-panel" }))));
  }
  static get style() { return orionAccordionCss; }
}, [1, "orion-accordion", {
    "open": [1028],
    "chevronLeft": [4, "chevron-left"],
    "hasContainer": [4, "has-container"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionAccordion$1);
      }
      break;
  } });
}

const OrionAccordion = OrionAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { OrionAccordion, defineCustomElement };
