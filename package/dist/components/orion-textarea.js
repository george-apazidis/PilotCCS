import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const orionTextareaCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}textarea,input{outline:none}.orion-textarea{--orion-textarea__resize-handle:url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvMTZweC9JbnRlcmZhY2UvRHJhZyBjb3JuZXIvQnRtIHJpZ2h0PC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xLjUsMTYgQzAuNjcxNTcyODc1LDE2IDAsMTUuMzI4NDI3MSAwLDE0LjUgQzAsMTMuNjcxNTcyOSAwLjY3MTU3Mjg3NSwxMyAxLjUsMTMgQzIuMzI4NDI3MTIsMTMgMywxMy42NzE1NzI5IDMsMTQuNSBDMywxNS4zMjg0MjcxIDIuMzI4NDI3MTIsMTYgMS41LDE2IFogTTgsMTYgQzcuMTcxNTcyODgsMTYgNi41LDE1LjMyODQyNzEgNi41LDE0LjUgQzYuNSwxMy42NzE1NzI5IDcuMTcxNTcyODgsMTMgOCwxMyBDOC44Mjg0MjcxMiwxMyA5LjUsMTMuNjcxNTcyOSA5LjUsMTQuNSBDOS41LDE1LjMyODQyNzEgOC44Mjg0MjcxMiwxNiA4LDE2IFogTTgsOS41IEM3LjE3MTU3Mjg4LDkuNSA2LjUsOC44Mjg0MjcxMiA2LjUsOCBDNi41LDcuMTcxNTcyODggNy4xNzE1NzI4OCw2LjUgOCw2LjUgQzguODI4NDI3MTIsNi41IDkuNSw3LjE3MTU3Mjg4IDkuNSw4IEM5LjUsOC44Mjg0MjcxMiA4LjgyODQyNzEyLDkuNSA4LDkuNSBaIE0xNC41LDE2IEMxMy42NzE1NzI5LDE2IDEzLDE1LjMyODQyNzEgMTMsMTQuNSBDMTMsMTMuNjcxNTcyOSAxMy42NzE1NzI5LDEzIDE0LjUsMTMgQzE1LjMyODQyNzEsMTMgMTYsMTMuNjcxNTcyOSAxNiwxNC41IEMxNiwxNS4zMjg0MjcxIDE1LjMyODQyNzEsMTYgMTQuNSwxNiBaIE0xNC41LDkuNSBDMTMuNjcxNTcyOSw5LjUgMTMsOC44Mjg0MjcxMiAxMyw4IEMxMyw3LjE3MTU3Mjg4IDEzLjY3MTU3MjksNi41IDE0LjUsNi41IEMxNS4zMjg0MjcxLDYuNSAxNiw3LjE3MTU3Mjg4IDE2LDggQzE2LDguODI4NDI3MTIgMTUuMzI4NDI3MSw5LjUgMTQuNSw5LjUgWiBNMTQuNSwzIEMxMy42NzE1NzI5LDMgMTMsMi4zMjg0MjcxMiAxMywxLjUgQzEzLDAuNjcxNTcyODc1IDEzLjY3MTU3MjksMCAxNC41LDAgQzE1LjMyODQyNzEsMCAxNiwwLjY3MTU3Mjg3NSAxNiwxLjUgQzE2LDIuMzI4NDI3MTIgMTUuMzI4NDI3MSwzIDE0LjUsMyBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iSWNvbnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NzEuMDAwMDAwLCAtODIyLjAwMDAwMCkiIGlkPSJHcm91cCI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3MS4wMDAwMDAsIDgyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJEcmFnLWNvcm5lciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iU2hhcGUiIGZpbGw9IiM3Qzg3OEUiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgbWFzaz0idXJsKCNtYXNrLTIpIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDAuMDAwMDAwKSIgaWQ9IkNvbG9yL0dyYXlzY2FsZS84MCUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzMzMzMzMyIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==\");position:relative;display:flex;flex-direction:column;justify-content:flex-start;min-width:176px;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;overflow:auto}textarea{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;min-width:176px;max-width:var(--orion-container-width-md, 944px);min-height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px);overflow:auto;resize:none;transition:var(--orion-transition, 200ms ease-in-out);position:relative}textarea::-moz-placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}textarea::placeholder{color:var(--orion-color-text--dimmed, #666);font-style:italic;opacity:1}textarea:disabled{background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);opacity:1}textarea:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}textarea::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}textarea::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-textarea--error{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:none}.orion-textarea--resize{resize:both}.orion-textarea--resizeX{resize:horizontal}.orion-textarea--resizeY{resize:vertical}.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:var(--orion-textarea__resize-handle);background-position:bottom 7px right 7px;background-repeat:no-repeat;transition:none;background-size:14px}@media screen and (min-width: 769px){textarea{min-height:var(--orion-touch-size, 40px);font-size:var(--orion-font-size-body, 16px);padding:var(--orion-space-md, 8px)}}@media (hover: none){.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:none}}@-moz-document url-prefix(){.orion-textarea--resize,.orion-textarea--resizeX,.orion-textarea--resizeY{background-image:none}}";

const OrionTextarea$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.disabled = false;
    this.required = false;
    this.error = false;
    this.value = '';
    this.placeholder = '';
    this.resize = false;
    this.resizeHorizontal = false;
    this.resizeVertical = false;
    this.autocorrect = 'off';
    this.autofocus = false;
    this.cols = 20;
    this.form = '';
    this.maxLength = 524288;
    this.minLength = 0;
    this.name = '';
    this.readonly = false;
    this.rows = 2;
    this.spellcheck = false;
    this.wrap = 'soft';
  }
  onInputChangeValue(event) {
    this.value = event.target.value;
    this.valueChanged.emit({ value: this.value });
  }
  getCSSClass() {
    return classnames('', // this class is always applied
    {
      'orion-textarea--error orion-textarea--resize': this.error && this.resize,
      'orion-textarea--error orion-textarea--resizeX': this.error && this.resizeHorizontal,
      'orion-textarea--error orion-textarea--resizeY': this.error && this.resizeVertical,
      'orion-textarea--error': this.error,
      'orion-textarea--resize': this.resize,
      'orion-textarea--resizeX': this.resizeHorizontal,
      'orion-textarea--resizeY': this.resizeVertical, // this class is applied if the resize vertical prop is true
    });
  }
  render() {
    return (h("div", { class: "orion-textarea" }, h("textarea", { class: !this.disabled ? this.getCSSClass() : '', value: this.value, placeholder: this.placeholder, disabled: this.disabled, required: this.required, onInput: this.onInputChangeValue.bind(this), autocorrect: this.autocorrect, autofocus: this.autofocus, cols: this.cols, form: this.form, maxLength: this.maxLength, minLength: this.minLength, name: this.name, readOnly: this.readonly, rows: this.rows, spellcheck: this.spellcheck, wrap: this.wrap })));
  }
  static get style() { return orionTextareaCss; }
}, [1, "orion-textarea", {
    "disabled": [4],
    "required": [4],
    "error": [4],
    "value": [1025],
    "placeholder": [1],
    "resize": [4],
    "resizeHorizontal": [4, "resize-horizontal"],
    "resizeVertical": [4, "resize-vertical"],
    "autocorrect": [1],
    "autofocus": [4],
    "cols": [2],
    "form": [1],
    "maxLength": [2, "max-length"],
    "minLength": [2, "min-length"],
    "name": [1],
    "readonly": [4],
    "rows": [2],
    "spellcheck": [4],
    "wrap": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-textarea"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-textarea":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionTextarea$1);
      }
      break;
  } });
}

const OrionTextarea = OrionTextarea$1;
const defineCustomElement = defineCustomElement$1;

export { OrionTextarea, defineCustomElement };
