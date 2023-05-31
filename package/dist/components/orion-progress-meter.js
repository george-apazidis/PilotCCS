import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const orionProgressMeterCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{--orion-progress-meter__color-progress:var(--orion-info, #002244);--orion-progress-meter__color-circle-label:var(--orion-color-background, #fff);--orion-progress-meter__color-progess-background:var(--orion-gray-10, #e6e6e6);--orion-progress-meter__color-success:var(--orion-green, #208500);--orion-progress-meter__color-warn:var(--orion-yellow, #edb72b);--orion-progress-meter__color-error:var(--orion-red, #d50032);display:block}*::-moz-selection{background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{background-color:var(--orion-color-background--selection, #d8d9eb)}.orion-progress-meter{display:flex;align-items:center;justify-content:center;width:100%;height:var(--orion-space-md, 8px);border-radius:var(--orion-space-xl, 16px);position:relative}.orion-progress-meter--circle{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%}.orion-progress-meter--circle.orion-progress-meter--small{width:56px;height:56px}.orion-progress-meter--circle.orion-progress-meter--small .orion-progress-meter--circle__overlay{width:40px;height:40px}.orion-progress-meter--circle.orion-progress-meter--small .orion-progress-meter__segment--circle{width:56px}.orion-progress-meter--circle.orion-progress-meter--medium{width:88px;height:88px}.orion-progress-meter--circle.orion-progress-meter--medium .orion-progress-meter--circle__overlay{width:64px;height:64px}.orion-progress-meter--circle.orion-progress-meter--medium .orion-progress-meter__segment--circle{width:88px}.orion-progress-meter--circle.orion-progress-meter--large{width:120px;height:120px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter--circle__overlay{width:88px;height:88px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter--circle__overlay .orion-progress-meter--circle__value{font-size:16px}.orion-progress-meter--circle.orion-progress-meter--large .orion-progress-meter__segment--circle{width:120px}.orion-progress-meter--circle__overlay{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;z-index:var(--orion-z-base, 1)}.orion-progress-meter--circle__value{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:13px;font-weight:var(--orion-font-weight-bold, 700);letter-spacing:0;z-index:var(--orion-z-base, 1)}.orion-progress-meter__segment{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:var(--orion-space-md, 8px)}.orion-progress-meter__segment:first-child{border-top-left-radius:var(--orion-space-xl, 16px);border-bottom-left-radius:var(--orion-space-xl, 16px)}.orion-progress-meter__segment:last-child{border-top-right-radius:var(--orion-space-xl, 16px);border-bottom-right-radius:var(--orion-space-xl, 16px)}.orion-progress-meter__segment--circle{position:absolute;width:48px;height:2px}";

const OrionProgressMeter$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.oddSegments = this.segments % 2 === 1;
    this.value = 0;
    this.max = 100;
    this.target = 0;
    this.percentOfTarget = 0.8;
    this.isCircle = false;
    this.showValue = false;
    this.size = 'small';
    this.segments = 1;
  }
  getCSSStyle() {
    let colorVar = '--orion-progress-meter__color-progress';
    if (this.target !== 0) {
      if (this.value >= this.target) {
        colorVar = '--orion-progress-meter__color-success';
      }
      else if (this.value >= this.target * this.percentOfTarget) {
        colorVar = '--orion-progress-meter__color-warn';
      }
      else {
        colorVar = '--orion-progress-meter__color-error';
      }
    }
    const percent = (this.value / this.max) * 100;
    const remainder = 100 - percent;
    if (this.isCircle) {
      return { background: `conic-gradient(var(${colorVar}) ${percent}%, 0, var(--orion-progress-meter__color-progess-background) ${remainder}%)` };
    }
    return { background: `linear-gradient(to right, var(${colorVar}) ${percent}%, 0, var(--orion-progress-meter__color-progess-background) ${remainder}%)` };
  }
  getSegmentCSSStyle() {
    return {
      outline: `1px solid var(--orion-progress-meter__color-circle-label)`,
    };
  }
  getCircleSegmentCSSStyle() {
    if (this.oddSegments) {
      return {
        background: `linear-gradient(
        to right,
        transparent 0%,
        transparent 50%,
        var(--orion-progress-meter__color-circle-label) 50%,
        var(--orion-progress-meter__color-circle-label) 100%
        )`,
      };
    }
    return { backgroundColor: `var(--orion-progress-meter__color-circle-label)` };
  }
  render() {
    const component = (h("div", null, this.isCircle ? (h("div", { class: `orion-progress-meter--circle ${this.size ? `orion-progress-meter--${this.size}` : ''}`, style: this.getCSSStyle() }, this.segments > 1
      ? Array(this.segments)
        .fill(0)
        .map((_, i) => (h("div", { class: "orion-progress-meter__segment--circle", style: Object.assign({ transform: `rotate(${(i * 360) / this.segments - 90}deg` }, this.getCircleSegmentCSSStyle()) })))
      : '', h("span", { class: "orion-progress-meter--circle__overlay", style: { backgroundColor: `var(--orion-progress-meter__color-circle-label)` } }, this.showValue ? h("span", { class: "orion-progress-meter--circle__value" }, this.value) : ''))) : (h("div", { class: "orion-progress-meter", style: this.getCSSStyle() }, this.segments > 1
      ? Array(this.segments)
        .fill(0)
        .map((_, i) => h("div", { class: "orion-progress-meter__segment", style: Object.assign({ right: `${(i * 100) / this.segments}%` }, this.getSegmentCSSStyle()) }))
      : ''))));
    return h(Host, null, component);
  }
  static get style() { return orionProgressMeterCss; }
}, [1, "orion-progress-meter", {
    "value": [1538],
    "max": [2],
    "target": [2],
    "percentOfTarget": [2, "percent-of-target"],
    "isCircle": [4, "is-circle"],
    "showValue": [4, "show-value"],
    "size": [1],
    "segments": [2]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-progress-meter"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-progress-meter":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionProgressMeter$1);
      }
      break;
  } });
}

const OrionProgressMeter = OrionProgressMeter$1;
const defineCustomElement = defineCustomElement$1;

export { OrionProgressMeter, defineCustomElement };
