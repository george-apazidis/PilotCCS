import { Host, h } from '@stencil/core';
export class OrionRadioButtonGroup {
  constructor() {
    this.name = 'radiogroup';
    this.value = '';
    this.disabled = false;
    this.required = false;
    this.inline = false;
  }
  /**
   * A getter that returns an array of `orion-radio-buttons` that are in the slot
   */
  get radioButtons() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-RADIO-BUTTON');
  }
  /**
   * Listen to the `radioButtonChanged` event emitted by the
   * `orion-radio-button` component and update
   */
  onRadioChanged(event) {
    this.setRadioButtonStateByValue(event.detail.value);
  }
  /**
   * When the component is initially loaded, set the checked
   * radio button according to `value` and update the `name`
   */
  componentDidLoad() {
    this.setRadioButtonStateByValue(this.value);
    this.setRadioButtonName();
    this.makeFirstFocusableIfNoneChecked();
    if (this.disabled) {
      this.setRadioButtonGroupDisabled();
    }
  }
  /**
   * Check to see if any radio buttons are checked.
   * If not, make the first one focusable
   */
  makeFirstFocusableIfNoneChecked() {
    const hasAnyChecked = this.radioButtons.some(radio => radio.checked);
    const hasCheckedDisabled = this.radioButtons.some(radio => radio.checked && radio.disabled);
    if (!hasAnyChecked || hasCheckedDisabled) {
      const firstButton = this.radioButtons[0];
      if (firstButton) {
        firstButton.focusable = true;
      }
    }
  }
  /**
   * Update value and emit update
   */
  updateValue(value) {
    this.value = value;
    this.valueChanged.emit({ value });
  }
  /**
   * Set the name on all the radio buttons
   */
  setRadioButtonName() {
    this.radioButtons.forEach(radio => {
      radio.setAttribute('name', this.name);
    });
  }
  /**
   * Disable all radio buttons in group
   */
  setRadioButtonGroupDisabled() {
    this.radioButtons.forEach(radio => {
      radio.setAttribute('disabled', '');
    });
  }
  /**
   * Set the radio button with the selected value to be checked.
   * All other radio buttons will be unchecked
   */
  setRadioButtonStateByValue(selectedValue) {
    this.radioButtons.forEach(radio => {
      const isSelected = radio.value === selectedValue;
      radio.checked = isSelected;
      if (!radio.disabled) {
        radio.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(radio.value);
      }
    });
  }
  /**
   * Set the radio button at the selected index to be checked.
   * All other radio buttons will be unchecked
   */
  setRadioButtonStateByIndex(selectedIndex) {
    this.radioButtons.forEach((radio, radioIndex) => {
      const isSelected = radioIndex === selectedIndex;
      radio.checked = isSelected;
      if (!radio.disabled) {
        radio.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(radio.value);
      }
    });
  }
  /**
   *
   * Gets the index of the currently checked radio button
   */
  getCheckedIndex() {
    const currentActiveTrigger = this.radioButtons.find(element => element.checked);
    return currentActiveTrigger ? this.radioButtons.indexOf(currentActiveTrigger) : -1;
  }
  /**
   * Move checked to the next radio button
   */
  nextRadio() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex < this.radioButtons.length - 1 ? currentIndex + 1 : 0;
    this.setRadioButtonStateByIndex(nextIndex);
  }
  /**
   * Move checked to the previous radio button
   */
  prevRadio() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex <= 0 ? this.radioButtons.length - 1 : currentIndex - 1;
    this.setRadioButtonStateByIndex(nextIndex);
  }
  /**
   * Handle keyboard navigation, move to previous/next radio button
   */
  handleKeyPress(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.nextRadio();
    }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.prevRadio();
    }
  }
  render() {
    return (h(Host, { tabindex: this.disabled ? '-1' : '0' }, h("fieldset", { class: `orion-radio-group 
            ${this.inline ? 'orion-radio-group--inline' : ''}` }, h("slot", { ref: el => {
        this.slotEl = el;
      } }))));
  }
  static get is() { return "orion-radio-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-radio-button-group.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-radio-button-group.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "form name of radio buttons"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'radiogroup'"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "value of currently checked radio button"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
      },
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
          "text": "Disabled radio group"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
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
          "text": "Required attribute"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "inline": {
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
          "text": "The inline display of the radio group"
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Emits event that users can listen to"
        },
        "complexType": {
          "original": "{ value: string }",
          "resolved": "{ value: string; }",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "radioButtonChanged",
        "method": "onRadioChanged",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "handleKeyPress",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
