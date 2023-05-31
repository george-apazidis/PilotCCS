import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const orionCheckboxCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-checkbox--vertical-align:flex-start;display:block}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-checkbox__label{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:var(--orion-checkbox--vertical-align);width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px) var(--orion-space-xxl, 18px) 0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out);-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-checkbox__label--disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none}input{opacity:0;position:absolute;left:0;top:0;width:0;height:0}.orion-checkbox__input{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);margin-right:var(--orion-space-md, 8px)}.orion-checkbox__label input:focus~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:var(--orion-border-radius, 4px)}.orion-checkbox__label input:focus:not(:focus-visible)~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);box-shadow:none}.orion-checkbox__label input:focus-visible~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5)), var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb);border-radius:var(--orion-border-radius, 4px)}.orion-checkbox__label input~.orion-checkbox__input{transition:var(--orion-transition, 200ms ease-in-out)}.orion-checkbox__label input:checked~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);background-color:var(--orion-color-activation, #6244bb)}.orion-checkbox__label input:disabled~.orion-checkbox__input{border:var(--orion-border-standard, 1px solid) var(--orion-gray-40, #999);background-color:var(--orion-color-background--dimmed, #e6e6e6)}.orion-checkbox__label input:disabled:checked~.orion-checkbox__input{background-color:var(--orion-gray-40, #999)}.orion-checkbox__input:after{content:\"\";position:absolute;display:none}.orion-checkbox__label input:checked~.orion-checkbox__input:after{display:block}.orion-checkbox__label .orion-checkbox__input:after{left:50%;top:45%;width:6px;height:12px;border:solid var(--orion-color-background, #fff);border-width:0 3px 3px 0;transform:translate(-50%, -50%) rotate(45deg)}@media screen and (min-width: 769px){.orion-checkbox__label{font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px) var(--orion-space-md, 8px) var(--orion-space-md, 8px) 0}.orion-checkbox__input{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);border-radius:var(--orion-border-radius-sm, 2px);margin-top:2px}.orion-checkbox__label input:focus~.orion-checkbox__input,.orion-checkbox__label input:focus-visible~.orion-checkbox__input{border-radius:var(--orion-border-radius-sm, 2px)}.orion-checkbox__label .orion-checkbox__input:after{width:5px;height:10px;border-width:0 2px 2px 0}}";

const OrionCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
  }
  onCheckboxChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value, checked: event.target.checked });
  }
  render() {
    return (h("label", { class: `orion-checkbox__label 
          ${this.disabled ? 'orion-checkbox__label--disabled' : ''}` }, h("span", null, h("input", { type: "checkbox", name: this.name, disabled: this.disabled, value: this.value, checked: this.checked, onInput: this.onCheckboxChangeValue.bind(this) }), h("span", { class: "orion-checkbox__input" })), h("slot", null)));
  }
  static get style() { return orionCheckboxCss; }
}, [1, "orion-checkbox", {
    "value": [1025],
    "checked": [4],
    "name": [1],
    "disabled": [4],
    "required": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionCheckbox$1);
      }
      break;
  } });
}

const OrionCheckbox = OrionCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { OrionCheckbox, defineCustomElement };
