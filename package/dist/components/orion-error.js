import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const orionErrorCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block}.orion-error{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;width:100%;max-width:var(--orion-container-width-md, 944px);font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-error, #d50032);font-size:var(--orion-font-size-small, 13px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-sm, 16px);font-style:italic;margin:0;padding:var(--orion-space-md, 8px) 0 0 0}.orion-error svg{fill:var(--orion-error-color-text, #d50032);padding-right:var(--orion-space-xs, 4px)}";

const OrionError$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "orion-error" }, h("span", null, h("svg", { width: "16px", height: "16px", viewBox: "0 0 16 16" }, h("path", { d: "M15.7965714,12.8914286 L9.28228571,1.62285714 C9.02503828,1.15724226 8.53188534,0.871547603 8,0.88 C7.8690389,0.878267092 7.73841176,0.893634991 7.61142857,0.925714286 C7.23326196,1.0300281 6.91237715,1.28097647 6.72,1.62285714 L0.194285714,12.8914286 C0.0675374493,13.1185497 0.000677122129,13.3741921 0,13.6342857 C0,14.4548231 0.665176943,15.1200075 1.48571429,15.1200075 L14.5142857,15.1200075 C14.7760842,15.1208485 15.0330738,15.0496821 15.2571429,14.9142857 C15.598165,14.7187274 15.8469621,14.3950705 15.948253,14.0152294 C16.049544,13.6353882 15.9949392,13.2308242 15.7965714,12.8914286 Z M8,12.4914416 C7.54240872,12.4882619 7.17402274,12.1147476 7.17718217,11.6571563 C7.1803416,11.1995649 7.55385006,10.831173 8.01144144,10.8343252 C8.46903281,10.8374774 8.83743063,11.21098 8.83428571,11.6685714 C8.83051289,12.125918 8.45735512,12.493964 8,12.4914416 L8,12.4914416 Z M7.42857143,5.49714286 L8.57142857,5.49714286 L8.57142857,9.49714286 L7.42857143,9.49714286 L7.42857143,5.49714286 Z", id: "path-1" }))), h("slot", null)));
  }
  static get style() { return orionErrorCss; }
}, [1, "orion-error"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-error"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-error":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionError$1);
      }
      break;
  } });
}

const OrionError = OrionError$1;
const defineCustomElement = defineCustomElement$1;

export { OrionError, defineCustomElement };
