import { h } from '@stencil/core';
import classnames from 'classnames';
export class OrionStepper {
  constructor() {
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
  static get is() { return "orion-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-stepper.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-stepper.css"]
    };
  }
  static get properties() {
    return {
      "disabled": {
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
          "text": "Disables interactions"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "error": {
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
          "text": "Shows error state"
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      },
      "hideTally": {
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
          "text": "Hide the current tally"
        },
        "attribute": "hide-tally",
        "reflect": false,
        "defaultValue": "false"
      },
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
      "step": {
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
          "text": "Step size to increment/decrement"
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "1"
      },
      "min": {
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
          "text": "Min value that the stepper can be decremented to"
        },
        "attribute": "min",
        "reflect": false,
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
          "text": "Max value that the stepper can be incremented to"
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
      }
    };
  }
  static get events() {
    return [{
        "method": "valueChanged",
        "name": "valueChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "CustomEvent `detail` will be the new value"
        },
        "complexType": {
          "original": "{ value: number }",
          "resolved": "{ value: number; }",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "handleKeyDown",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
