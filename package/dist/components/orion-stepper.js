import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const orionStepperCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;--orion-stepper-tally-width:var(--orion-touch-size)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none;margin:0}input[type=number],input[type=number]:focus,input[type=number]:hover,input[type=number]:active,input[type=number]:disabled{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input{outline:none}.orion-stepper{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0}input{border:none;border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-sizing:border-box;border-top:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-bottom:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);background-color:var(--orion-color-background, #fff);width:var(--orion-stepper-tally-width);height:var(--orion-touch-size, 60px);text-align:center;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:0;transition:var(--orion-transition, 200ms ease-in-out)}input:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:inset 0 0 0 2px var(--orion-color-activation, #6244bb)}input::-moz-selection{background-color:var(--orion-color-focus, #d8d9eb)}input::selection{background-color:var(--orion-color-focus, #d8d9eb)}input:disabled{color:var(--orion-color-text--dimmed, #666);-webkit-text-fill-color:var(--orion-color-text--dimmed, #666);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--orion-color-background--dimmed, #e6e6e6);border-color:var(--orion-color-text--dimmed, #666);opacity:1;cursor:not-allowed}.orion-stepper--error input{-webkit-appearance:none;appearance:none;-moz-appearance:textfield;border:2px solid var(--orion-color-error, #d50032)}.orion-stepper--error input:focus{border:1px solid var(--orion-color-activation, #6244bb);box-shadow:inset 0 0 0 2px var(--orion-color-activation, #6244bb)}.orion-stepper--error .orion-stepper__button-left{border-right:none;padding-right:1px}.orion-stepper--error .orion-stepper__button-right{border-left:none;padding-left:1px}.orion-stepper--hide-tally input{display:none}.orion-stepper__button{display:flex;flex-direction:column;justify-content:center;align-items:center;flex-shrink:0;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--orion-color-background, #fff);width:var(--orion-touch-size, 60px);height:var(--orion-touch-size, 60px);margin:0;padding:0;cursor:pointer;transition:var(--orion-transition, 200ms ease-in-out)}.orion-stepper__button svg{fill:var(--orion-color-activation, #6244bb)}.orion-stepper__button:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-stepper__button:focus:not(:focus-visible){box-shadow:none}.orion-stepper__button:focus-visible{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;box-shadow:var(--orion-box-shadow-thicker, 0 0 0 4px) var(--orion-color-focus, rgba(182, 184, 220, 0.5));z-index:var(--orion-z-base, 1)}.orion-stepper__button:hover{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-hover-light, #eaeaf3)}.orion-stepper__button:active{color:var(--orion-color-activation, #6244bb);background-color:var(--orion-dusk-50, #d8d9eb);border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb)}.orion-stepper__button:disabled{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);cursor:not-allowed}.orion-stepper__button:disabled svg{fill:var(--orion-color-text--dimmed, #666)}.orion-stepper__button-left{border-top-left-radius:var(--orion-border-radius, 4px);border-bottom-left-radius:var(--orion-border-radius, 4px)}.orion-stepper__button-right{border-top-right-radius:var(--orion-border-radius, 4px);border-bottom-right-radius:var(--orion-border-radius, 4px)}.svg-container__mobile{display:block;width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px)}.svg-container__desktop{display:none}@media screen and (min-width: 769px){:host{--orion-stepper-tally-width:calc(var(--orion-touch-size) + 4px)}input{font-size:var(--orion-font-size-body, 16px);width:var(--orion-stepper-tally-width);height:var(--orion-touch-size, 40px)}.orion-stepper__button{width:var(--orion-touch-size, 40px);height:var(--orion-touch-size, 40px)}.svg-container__mobile{display:none}.svg-container__desktop{display:block;width:var(--orion-icon-size-sm, 16px);height:var(--orion-icon-size-sm, 16px)}}@media (hover: none){.orion-stepper__button:hover:not(:disabled){color:var(--orion-color-activation, #6244bb);background-color:var(--orion-color-background, #fff)}.orion-stepper__button:hover:not(:disabled) svg{fill:var(--orion-color-activation, #6244bb)}}";

const OrionStepper$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.disabled = false;
    this.error = false;
    this.hideTally = false;
    this.value = 0;
    this.step = 1;
    this.min = 0;
    this.max = 100;
  }
  handleKeyDown(ev) {
    if (ev.key === 'Home') {
      ev.preventDefault();
      this.value = this.min;
    }
    if (ev.key === 'End') {
      ev.preventDefault();
      this.value = this.max;
    }
  }
  onInputChangeValue(event) {
    this.value = parseInt(event.target.value);
    this.valueChanged.emit({ value: this.value });
  }
  subtract() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.valueChanged.emit({ value: this.value });
    }
  }
  add() {
    if (this.value < this.max) {
      this.value += this.step;
      this.valueChanged.emit({ value: this.value });
    }
  }
  isAddDisabled() {
    return this.value >= this.max;
  }
  isSubstractDisabled() {
    return this.value <= this.min;
  }
  isError() {
    return this.value < this.min || this.value > this.max;
  }
  getCSSClass() {
    return classnames({
      'orion-stepper--hide-tally': this.hideTally,
      'orion-stepper--error': (this.error || this.isError()) && !this.disabled, // this class is applied if the error prop is true and the disabled prop is false
    });
  }
  render() {
    return (h("div", { class: `orion-stepper ${this.getCSSClass()}` }, h("button", { class: "orion-stepper__button orion-stepper__button-left", disabled: this.disabled || this.isSubstractDisabled(), onClick: this.subtract.bind(this), "aria-label": "subtract" }, h("div", { class: "svg-container__mobile" }, h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, h("path", { d: "M1,13 L23,13 C23.5522847,13 24,12.5522847 24,12 C24,11.4477153 23.5522847,11 23,11 L1,11 C0.44771525,11 -6.76353751e-17,11.4477153 0,12 C6.76353751e-17,12.5522847 0.44771525,13 1,13 Z", id: "path-1" }))), h("div", { class: "svg-container__desktop" }, h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, h("path", { d: "M0.5,8.5 L15.5,8.5 C15.7761424,8.5 16,8.27614237 16,8 C16,7.72385763 15.7761424,7.5 15.5,7.5 L0.5,7.5 C0.223857625,7.5 -3.38176876e-17,7.72385763 0,8 C3.38176876e-17,8.27614237 0.223857625,8.5 0.5,8.5 Z", id: "path-1" })))), h("input", { onKeyDown: this.handleKeyDown.bind(this), type: "number", inputmode: "numeric", pattern: "[0-9]*", id: "stepper", step: this.step, min: this.min, max: this.max, value: this.value, disabled: this.disabled, onInput: this.onInputChangeValue.bind(this), role: "spinbutton", "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value }), h("button", { class: "orion-stepper__button orion-stepper__button-right", disabled: this.disabled || this.isAddDisabled(), onClick: this.add.bind(this), "aria-label": "add" }, h("div", { class: "svg-container__mobile" }, h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, h("path", { d: "M13,11 L23,11 C23.5522847,11 24,11.4477153 24,12 C24,12.5522847 23.5522847,13 23,13 L13,13 L13,23 C13,23.5522847 12.5522847,24 12,24 C11.4477153,24 11,23.5522847 11,23 L11,13 L1,13 C0.44771525,13 -3.01980663e-14,12.5522847 -3.01980663e-14,12 C-3.01980663e-14,11.4477153 0.44771525,11 1,11 L11,11 L11,1 C11,0.44771525 11.4477153,0 12,0 C12.5522847,0 13,0.44771525 13,1 L13,11 Z", id: "path-1" }))), h("div", { class: "svg-container__desktop" }, h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, h("path", { d: "M8.66666667,7.33333333 L15.3333333,7.33333333 C15.7015232,7.33333333 16,7.63181017 16,8 C16,8.36818983 15.7015232,8.66666667 15.3333333,8.66666667 L8.66666667,8.66666667 L8.66666667,15.3333333 C8.66666667,15.7015232 8.36818983,16 8,16 C7.63181017,16 7.33333333,15.7015232 7.33333333,15.3333333 L7.33333333,8.66666667 L0.666666667,8.66666667 C0.298476833,8.66666667 -1.95399252e-14,8.36818983 -1.95399252e-14,8 C-1.95399252e-14,7.63181017 0.298476833,7.33333333 0.666666667,7.33333333 L7.33333333,7.33333333 L7.33333333,0.666666667 C7.33333333,0.298476833 7.63181017,0 8,0 C8.36818983,0 8.66666667,0.298476833 8.66666667,0.666666667 L8.66666667,7.33333333 Z", id: "path-1" }))))));
  }
  static get style() { return orionStepperCss; }
}, [1, "orion-stepper", {
    "disabled": [4],
    "error": [4],
    "hideTally": [4, "hide-tally"],
    "value": [1538],
    "step": [2],
    "min": [2],
    "max": [2]
  }, [[0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-stepper"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-stepper":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionStepper$1);
      }
      break;
  } });
}

const OrionStepper = OrionStepper$1;
const defineCustomElement = defineCustomElement$1;

export { OrionStepper, defineCustomElement };
