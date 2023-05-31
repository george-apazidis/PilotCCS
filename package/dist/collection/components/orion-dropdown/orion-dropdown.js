import { h } from '@stencil/core';
import classnames from 'classnames';
import { generateUUID } from '../../utils/utils';
export class OrionDropdown {
  constructor() {
    this.mouseDown = false;
    this.listBoxUID = '';
    this.name = 'dropdown';
    this.value = '';
    this.disabled = false;
    this.required = false;
    this.error = false;
    this.placeholder = '';
    this.summary = '';
    this.isOpen = false;
  }
  /**
   * A getter that returns an array of `orion-dropdown-options` that are in the slot
   */
  get dropdownOptions() {
    // assignedElements gets the elements inside of a slot
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements
    return this.slotEl.assignedElements().filter((element) => element.tagName === 'ORION-DROPDOWN-OPTION');
  }
  /**
   * Listen to the `dropdownOptionChanged` event emitted by the
   * `orion-dropdown-option` component and update
   */
  onOptionChanged(event) {
    this.setDropdownOptionStateByValue(event.detail.value);
    this.isOpen = false;
  }
  // Initialize summary text to placeholder text
  componentWillLoad() {
    this.summary = this.placeholder;
    this.listBoxUID = generateUUID();
  }
  /**
   * When the component is initially loaded, set the checked
   * dropdown option according to `value` and update the `name`
   */
  componentDidLoad() {
    this.setDropdownOptionStateByValue(this.value);
    this.setDropdownOptionName();
    this.makeFirstFocusableIfNoneChecked();
  }
  /**
   * Check to see if any dropdown options are checked.
   * If not, make the first one focusable
   */
  makeFirstFocusableIfNoneChecked() {
    const hasAnyChecked = this.dropdownOptions.some(option => option.checked);
    const hasCheckedDisabled = this.dropdownOptions.some(option => option.checked && option.disabled);
    if (!hasAnyChecked || hasCheckedDisabled) {
      const firstButton = this.dropdownOptions[0];
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
   * Set the name on all the dropdown options
   */
  setDropdownOptionName() {
    this.dropdownOptions.forEach(option => {
      option.setAttribute('name', this.name);
    });
  }
  /**
   * Set the dropdown option with the selected value to be checked.
   * All other dropdown options will be unchecked
   */
  setDropdownOptionStateByValue(selectedValue) {
    this.dropdownOptions.forEach(option => {
      const isSelected = option.value === selectedValue;
      option.checked = isSelected;
      if (!option.disabled) {
        option.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(option.value);
        this.getSummary(option.value, option.label);
      }
    });
  }
  /**
   * Set the summary text based on the selected value
   */
  getSummary(value, label) {
    this.dropdownOptions.forEach(option => {
      const isSelected = option.value === value;
      if (isSelected) {
        this.summary = label;
      }
    });
  }
  /**
   * Set the dropdown option at the selected index to be checked.
   * All other dropdown options will be unchecked
   */
  setDropdownOptionStateByIndex(selectedIndex) {
    this.dropdownOptions.forEach((option, optionIndex) => {
      const isSelected = optionIndex === selectedIndex;
      option.checked = isSelected;
      if (!option.disabled) {
        option.focusable = isSelected;
      }
      if (isSelected) {
        this.updateValue(option.value);
        this.getSummary(option.value, option.label);
      }
    });
  }
  /**
   *
   * Gets the index of the currently checked dropdown option
   */
  getCheckedIndex() {
    const currentActiveTrigger = this.dropdownOptions.find(element => element.checked);
    return currentActiveTrigger ? this.dropdownOptions.indexOf(currentActiveTrigger) : -1;
  }
  /**
   * Move checked to the next dropdown option
   */
  nextOption() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex < this.dropdownOptions.length - 1 ? currentIndex + 1 : 0;
    if (!this.dropdownOptions[nextIndex].disabled) {
      this.setDropdownOptionStateByIndex(nextIndex);
    }
  }
  /**
   * Move checked to the previous dropdown option
   */
  prevOption() {
    const currentIndex = this.getCheckedIndex();
    const nextIndex = currentIndex <= 0 ? this.dropdownOptions.length - 1 : currentIndex - 1;
    if (!this.dropdownOptions[nextIndex].disabled) {
      this.setDropdownOptionStateByIndex(nextIndex);
    }
  }
  /**
   * Handle keyboard navigation, move to previous/next dropdown option
   */
  handleKeyPress(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      this.isOpen = true;
      this.nextOption();
    }
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.isOpen = true;
      this.prevOption();
    }
    else if (event.key === 'Escape' || event.key === 'Tab' || event.key === 'Enter') {
      this.isOpen = false;
    }
  }
  /**
   * Close dropdown when clicking outside of dropdown
   */
  closeDropdown(event) {
    const target = event.target;
    if (!this.el.contains(target) && this.isOpen) {
      this.isOpen = false;
    }
  }
  handleMouseDown(event) {
    if (event.target === this.el) {
      this.mouseDown = true;
    }
  }
  handleMouseUp(event) {
    if (event.target === this.el) {
      this.isOpen = !this.isOpen;
      this.mouseDown = false;
    }
  }
  getDropdownClass() {
    return classnames('orion-dropdown', // this class is always applied
    {
      'orion-dropdown--disabled': this.disabled,
      'orion-dropdown--error': this.error,
      'orion-dropdown-isOpen': this.isOpen, // this class is applied if the isOpen prop is true
    });
  }
  getChevronClass() {
    return classnames('orion-dropdown__chevron', // this class is always applied
    {
      'orion-dropdown__chevron--disabled': this.disabled,
      'orion-dropdown__chevron--error--isClosed': this.error && !this.isOpen,
      'orion-dropdown__chevron--isClosed': !this.isOpen && !this.error,
      'orion-dropdown__chevron--isOpen': this.isOpen && !this.disabled, // this class is applied if the isOpen prop is true and the disabled prop is false
    });
  }
  render() {
    return (h("div", { class: "orion-dropdown__container" }, h("details", { class: this.getDropdownClass(), open: this.isOpen }, h("summary", { class: this.summary === this.placeholder ? 'orion-dropdown__placeholder' : 'orion-dropdown__value', tabIndex: this.disabled ? -1 : 0, "aria-controls": this.listBoxUID, "aria-expanded": this.isOpen ? 'true' : 'false' }, this.summary), h("fieldset", { class: "orion-dropdown__listbox", disabled: this.disabled, id: this.listBoxUID }, h("div", { role: "listbox" }, h("slot", { ref: el => {
        this.slotEl = el;
      } })))), h("div", { class: this.getChevronClass() })));
  }
  static get is() { return "orion-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-dropdown.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-dropdown.css"]
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
          "text": "form name of dropdown"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "'dropdown'"
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
          "text": "value of currently selected option"
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
          "text": "Disabled state of dropdown"
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
          "text": "Error state of dropdown"
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      },
      "placeholder": {
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
          "text": ""
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
      },
      "summary": {
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
          "text": ""
        },
        "attribute": "summary",
        "reflect": false,
        "defaultValue": "''"
      },
      "isOpen": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "is-open",
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
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "dropdownOptionChanged",
        "method": "onOptionChanged",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "handleKeyPress",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "click",
        "method": "closeDropdown",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "mousedown",
        "method": "handleMouseDown",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "mouseup",
        "method": "handleMouseUp",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
