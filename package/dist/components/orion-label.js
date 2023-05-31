import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const orionLabelCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-label--padding-right:8px;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-label{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-label, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-label__label{padding:var(--orion-space-md, 8px) var(--orion-label--padding-right) var(--orion-space-md, 8px) 0}.orion-label__label--disabled{color:var(--orion-color-text--disabled, #666)}.orion-label__label--error{color:var(--orion-color-error, #d50032)}.orion-label__conditional{color:var(--orion-color-text--disabled, #666);font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px);padding:var(--orion-space-md, 8px) 0 var(--orion-space-md, 8px) var(--orion-space-md, 8px)}@media screen and (min-width: 769px){.orion-label{font-size:var(--orion-font-size-label, 16px)}}";

const OrionLabel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.hasConditionalSlot = false;
    this.disabled = false;
    this.error = false;
  }
  getCSSClass() {
    return classnames('orion-label__label', // this class is always applied
    {
      'orion-label__label--disabled': this.disabled,
      'orion-label__label--error': this.error, // this class is applied if the error prop is true
    });
  }
  componentWillLoad() {
    this.hasConditionalSlot = !!this.el.querySelector('[slot="orion-label-conditional"]');
  }
  render() {
    return (h("div", { class: "orion-label" }, 
    /* Disabling eslint for the next line because this component is meant to wrap a label around
     * a control which will be inserted into the slot
     */
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    h("label", { class: this.getCSSClass() }, h("slot", null)), this.hasConditionalSlot ? (h("span", { class: "orion-label__conditional" }, h("slot", { name: "orion-label-conditional" }))) : null));
  }
  get el() { return this; }
  static get style() { return orionLabelCss; }
}, [1, "orion-label", {
    "disabled": [4],
    "error": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-label"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-label":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionLabel$1);
      }
      break;
  } });
}

const OrionLabel = OrionLabel$1;
const defineCustomElement = defineCustomElement$1;

export { OrionLabel, defineCustomElement };
