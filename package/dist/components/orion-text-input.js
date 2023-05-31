import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const orionTextInputCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}textarea,input{outline:none}.orion-text-input{position:relative;display:flex;flex-direction:column;justify-content:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}input{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);transition:var(--orion-transition, 200ms ease-in-out)}input::-moz-placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}input::placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}input:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);opacity:1}input:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}input::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}input::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-text-input--error{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}@media screen and (min-width: 769px){input{height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px)}}";

const OrionTextInput$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.type = 'text';
    this.value = '';
    this.placeholder = '';
    this.disabled = false;
    this.error = false;
    this.required = false;
    this.autocomplete = '';
    this.dirname = '';
    this.form = '';
    this.list = '';
    this.maxlength = 524288;
    this.minlength = 0;
    this.multiple = false;
    this.name = '';
    this.pattern = '';
    this.readonly = false;
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value });
  }
  render() {
    return (h("div", { class: "orion-text-input" }, h("input", { class: this.error && !this.disabled ? 'orion-text-input--error' : '', type: this.type, value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autoComplete: this.autocomplete, dirName: this.dirname, form: this.form, list: this.list, maxlength: this.maxlength, minlength: this.minlength, multiple: this.multiple, name: this.name, pattern: this.pattern, readOnly: this.readonly })));
  }
  static get style() { return orionTextInputCss; }
}, [1, "orion-text-input", {
    "type": [1],
    "value": [1025],
    "placeholder": [1],
    "disabled": [4],
    "error": [4],
    "required": [4],
    "autocomplete": [1],
    "dirname": [1],
    "form": [1],
    "list": [1],
    "maxlength": [2],
    "minlength": [2],
    "multiple": [4],
    "name": [1],
    "pattern": [1],
    "readonly": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-text-input"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-text-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionTextInput$1);
      }
      break;
  } });
}

const OrionTextInput = OrionTextInput$1;
const defineCustomElement = defineCustomElement$1;

export { OrionTextInput, defineCustomElement };