import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { g as generateUUID } from './utils.js';

const orionDropdownCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;outline:none}fieldset{border:none;margin:0;padding:0}details>summary{list-style:none;cursor:pointer}details>summary::-webkit-details-marker{display:none}fieldset:disabled{opacity:0;pointer-events:none}.orion-dropdown__container{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;max-width:var(--orion-container-width-md, 944px);margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none}details{width:100%;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);color:var(--orion-color-text, #333);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);letter-spacing:0;line-height:var(--orion-line-height-normal, 24px);margin:0;padding:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.orion-dropdown summary{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;height:var(--orion-touch-size, 60px);border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff)}.orion-dropdown--disabled summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-dropdown--error summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-error, #d50032);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-error, #d50032)}.orion-dropdown--isOpen summary{border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-dropdown summary:focus,.orion-dropdown summary:active{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-activation, #6244bb);box-shadow:var(--orion-box-shadow-standard, inset 0 0 0 1px) var(--orion-color-activation, #6244bb)}.orion-dropdown--disabled summary:focus,.orion-dropdown--disabled summary:active{-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:var(--orion-border-standard, 1px solid) var(--orion-color-text--dimmed, #666);box-shadow:none;background-color:var(--orion-color-background--dimmed, #e6e6e6);color:var(--orion-color-text--dimmed, #666);cursor:not-allowed}.orion-dropdown__placeholder,.orion-dropdown__value{padding:var(--orion-space-xxl, 18px) var(--orion-space-lg, 12px)}.orion-dropdown__placeholder{font-style:italic;color:var(--orion-color-text--dimmed, #666)}.orion-dropdown__listbox{position:absolute;z-index:var(--orion-z-mid, 100);width:calc(100% - 2px);max-height:75vh;overflow-y:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;border:var(--orion-border-standard, 1px solid) var(--orion-color-text, #333);border-radius:var(--orion-border-radius, 4px);background-color:var(--orion-color-background, #fff)}.orion-dropdown__chevron{width:var(--orion-icon-size, 24px);height:var(--orion-icon-size, 24px);position:absolute;right:12px}.orion-dropdown__chevron--disabled,.orion-dropdown__chevron--error--isClosed,.orion-dropdown__chevron--isClosed{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGggZD0iTTIuMjc0OTEyMzYsNS44ODAzNTU5IEMxLjc1MzUzNDg3LDUuMzcyMjc4MTYgMC45MDkzMTU2Miw1LjM3MzM1MzU2IDAuMzg5Mjk1ODg1LDUuODgyNzU3ODcgQy0wLjEzMDcyMzg1MSw2LjM5MjE2MjE4IC0wLjEyOTYyMzE3NCw3LjIxNjk5NDM1IDAuMzkxNzU0MzE1LDcuNzI1MDcyMDkgTDExLjA1ODQyMSwxOC4xMTk2NDQxIEMxMS41Nzg4Mzc0LDE4LjYyNjc4NTMgMTIuNDIxMTYyNiwxOC42MjY3ODUzIDEyLjk0MTU3OSwxOC4xMTk2NDQxIEwyMy42MDgyNDU3LDcuNzI1MDcyMDkgQzI0LjEyOTYyMzIsNy4yMTY5OTQzNSAyNC4xMzA3MjM5LDYuMzkyMTYyMTggMjMuNjEwNzA0MSw1Ljg4Mjc1Nzg3IEMyMy4wOTA2ODQ0LDUuMzczMzUzNTYgMjIuMjQ2NDY1MSw1LjM3MjI3ODE2IDIxLjcyNTA4NzYsNS44ODAzNTU5IEwxMiwxNS4zNTczNjc1IEwyLjI3NDkxMjM2LDUuODgwMzU1OSBaIiBpZD0icGF0aC0xIj48L3BhdGg+PC9zdmc+\");background-repeat:no-repeat;background-size:cover}.orion-dropdown__chevron--isOpen{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PHBhdGgKICAgICAgICAgICAgICAgICAgZD0iTTIxLjcyNTA4NzYsMTcuNjE5NjQ0MSBDMjIuMjQ2NDY1MSwxOC4xMjc3MjE4IDIzLjA5MDY4NDQsMTguMTI2NjQ2NCAyMy42MTA3MDQxLDE3LjYxNzI0MjEgQzI0LjEzMDcyMzksMTcuMTA3ODM3OCAyNC4xMjk2MjMyLDE2LjI4MzAwNTYgMjMuNjA4MjQ1NywxNS43NzQ5Mjc5IEwxMi45NDE1NzksNS4zODAzNTU4OSBDMTIuNDIxMTYyNiw0Ljg3MzIxNDcgMTEuNTc4ODM3NCw0Ljg3MzIxNDcgMTEuMDU4NDIxLDUuMzgwMzU1ODkgTDAuMzkxNzU0MzE1LDE1Ljc3NDkyNzkgQy0wLjEyOTYyMzE3NCwxNi4yODMwMDU2IC0wLjEzMDcyMzg1MSwxNy4xMDc4Mzc4IDAuMzg5Mjk1ODg1LDE3LjYxNzI0MjEgQzAuOTA5MzE1NjIsMTguMTI2NjQ2NCAxLjc1MzUzNDg3LDE4LjEyNzcyMTggMi4yNzQ5MTIzNiwxNy42MTk2NDQxIEwxMiw4LjE0MjYzMjQ5IEwyMS43MjUwODc2LDE3LjYxOTY0NDEgWiIKICAgICAgICAgICAgICAgICAgaWQ9InBhdGgtMSIKICAgICAgICAgICAgICAgID48L3BhdGg+PC9zdmc+\");background-repeat:no-repeat;background-size:cover}.orion-dropdown__chevron--error--isClosed{filter:brightness(0) saturate(100%) invert(17%) sepia(98%) saturate(5127%) hue-rotate(338deg) brightness(80%) contrast(112%)}.orion-dropdown__chevron--isOpen,.orion-dropdown__chevron--isClosed,details:focus-within~.orion-dropdown__chevron{filter:brightness(0) saturate(100%) invert(32%) sepia(18%) saturate(4839%) hue-rotate(232deg) brightness(87%) contrast(93%)}.orion-dropdown__chevron--disabled,details:focus-within~.orion-dropdown__chevron--disabled{filter:brightness(0) saturate(100%) invert(39%) sepia(0%) saturate(1%) hue-rotate(141deg) brightness(96%) contrast(84%);cursor:not-allowed}@media screen and (min-width: 769px){details{font-size:var(--orion-font-size-body, 16px)}.orion-dropdown summary{height:var(--orion-touch-size, 40px)}.orion-dropdown__placeholder,.orion-dropdown__value{padding:var(--orion-space-md, 8px)}.orion-dropdown__chevron{width:var(--orion-icon-size, 20px);height:var(--orion-icon-size, 20px);top:10px;right:8px}}";

const OrionDropdown$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
  get el() { return this; }
  static get style() { return orionDropdownCss; }
}, [1, "orion-dropdown", {
    "name": [1],
    "value": [1025],
    "disabled": [4],
    "required": [4],
    "error": [4],
    "placeholder": [1],
    "summary": [1025],
    "isOpen": [1028, "is-open"]
  }, [[0, "dropdownOptionChanged", "onOptionChanged"], [0, "keydown", "handleKeyPress"], [8, "click", "closeDropdown"], [1, "mousedown", "handleMouseDown"], [1, "mouseup", "handleMouseUp"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-dropdown"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-dropdown":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionDropdown$1);
      }
      break;
  } });
}

const OrionDropdown = OrionDropdown$1;
const defineCustomElement = defineCustomElement$1;

export { OrionDropdown, defineCustomElement };
