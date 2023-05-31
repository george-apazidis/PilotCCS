import { Host, h } from '@stencil/core';
export class OrionProgressMeter {
  constructor() {
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
  static get is() { return "orion-progress-meter"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-progress-meter.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-progress-meter.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The current value"
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "0"
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The maximum possible value"
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
      },
      "target": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The target value"
        },
        "attribute": "target",
        "reflect": false,
        "defaultValue": "0"
      },
      "percentOfTarget": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The percent of target value where progress meter color will change from error to warn (decimal value between 0 and 1)"
        },
        "attribute": "percent-of-target",
        "reflect": false,
        "defaultValue": "0.8"
      },
      "isCircle": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Shows progress meter in circle format"
        },
        "attribute": "is-circle",
        "reflect": false,
        "defaultValue": "false"
      },
      "showValue": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Display value in center of circle"
        },
        "attribute": "show-value",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "OrionSizeOptions",
          "resolved": "\"large\" | \"medium\" | \"small\"",
          "references": {
            "OrionSizeOptions": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The circle size"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'small'"
      },
      "segments": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Amount of segments to divide progress meter into"
        },
        "attribute": "segments",
        "reflect": false,
        "defaultValue": "1"
      }
    };
  }
}
