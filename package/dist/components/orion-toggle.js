import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const orionToggleCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-toggle--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-toggle{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:var(--orion-toggle--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) 0;-moz-column-gap:var(--orion-space-md, 8px);column-gap:var(--orion-space-md, 8px);cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-toggle--disabled{cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666)}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-toggle__input{position:relative;display:inline-block;width:54px;min-width:54px;height:32px;background-color:var(--orion-gray-10, #e6e6e6);border-radius:50px;box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle__input::after{content:\"\";position:absolute;height:100%;box-sizing:border-box;aspect-ratio:1;border-radius:50%;background-color:var(--orion-white, #fff);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);top:0;left:0;transition:var(--orion-transition, 200ms ease-in-out)}.orion-toggle input:checked~.orion-toggle__input{background-color:var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:checked~.orion-toggle__input::after{left:22px;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus:checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus:not(:focus-visible)~.orion-toggle__input{box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus:not(:focus-visible):checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:focus-visible~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-text, #333)}.orion-toggle input:focus-visible:checked~.orion-toggle__input{box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-toggle input:disabled~.orion-toggle__input::after{background-color:var(--orion-gray-10, #e6e6e6);border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999)}.orion-toggle input:disabled~.orion-toggle__input{background-color:var(--orion-gray-20, #ccc);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-gray-40, #999)}@media screen and (min-width: 769px){.orion-toggle{width:-moz-fit-content;width:fit-content;justify-content:space-between;font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) 0}.orion-toggle__input{width:40px;min-width:40px;height:24px}.orion-toggle input:checked~.orion-toggle__input::after{left:16px}}";

const OrionToggle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.value = '';
    this.checked = false;
    this.name = '';
    this.disabled = false;
    this.required = false;
    this.justify = false;
  }
  onToggleChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value, checked: event.target.checked });
  }
  getCSSStyle() {
    if (this.justify) {
      return {
        width: '100%',
      };
    }
    return {};
  }
  render() {
    return (h("label", { class: `orion-toggle 
          ${this.disabled ? 'orion-toggle--disabled' : ''}`, style: this.getCSSStyle() }, h("slot", null), h("input", { type: "checkbox", name: this.name, disabled: this.disabled, value: this.value, checked: this.checked, onInput: this.onToggleChangeValue.bind(this) }), h("span", { class: "orion-toggle__input" })));
  }
  get el() { return this; }
  static get style() { return orionToggleCss; }
}, [1, "orion-toggle", {
    "value": [1025],
    "checked": [4],
    "name": [1],
    "disabled": [4],
    "required": [4],
    "justify": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-toggle"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-toggle":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionToggle$1);
      }
      break;
  } });
}

const OrionToggle = OrionToggle$1;
const defineCustomElement = defineCustomElement$1;

export { OrionToggle, defineCustomElement };
