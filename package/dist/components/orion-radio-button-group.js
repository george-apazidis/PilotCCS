import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const orionRadioButtonGroupCss = "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{padding:0;margin:0;-moz-text-size-adjust:none;-webkit-text-size-adjust:none;text-size-adjust:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:var(--orion-font-weight-semi-bold, 600)}ul{list-style:none}button,input,select,textarea{margin:0}img,embed,iframe,object,audio,video{max-width:100%;height:auto}iframe{border:0}table{border-spacing:0;border-collapse:collapse}td,th{padding:0;text-align:left}html{font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);line-height:1.5}body{display:flex;flex-direction:column;min-height:100vh;font-family:var(--orion-font-family, \"Open Sans\", Arial, Helvetica, sans-serif);font-size:var(--orion-font-size-body, 18px);font-weight:var(--orion-font-weight-normal, 400);line-height:var(--orion-line-height-normal, 24px);color:var(--orion-color-text, #333);text-align:left;background-color:var(--orion-color-background, #fff)}*::-moz-selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}*::selection{color:var(--orion-color-text, #333);background-color:var(--orion-color-background--selection, #d8d9eb)}a,a:link{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:visited{color:var(--orion-color-activation, #6244bb);text-decoration:underline}a:focus{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:focus:not(:focus-visible){outline:none}a:focus-visible{color:var(--orion-color-activation, #6244bb);text-decoration:underline;outline:var(--orion-border-thicker, 4px solid) var(--orion-color-focus, rgba(182, 184, 220, 0.5));border-radius:var(--orion-border-radius, 4px);width:-moz-fit-content;width:fit-content}a:hover{color:var(--orion-color-hover-dark, #8972cc);text-decoration:underline}a:active{color:var(--orion-color-active, #49328c);text-decoration:underline}a[disabled=disabled]{color:var(--orion-color-text--dimmed, #666);text-decoration:underline;cursor:not-allowed}a,button{cursor:pointer}h1{font-size:var(--orion-font-size-title1, 32px);line-height:var(--orion-line-height-xl, 40px)}h2{font-size:var(--orion-font-size-title2, 28px);line-height:var(--orion-line-height-xl, 40px)}h3{font-size:var(--orion-font-size-title3, 24px);line-height:var(--orion-line-height-lg, 32px)}h4{font-size:var(--orion-font-size-title4, 20px);line-height:var(--orion-line-height-md, 24px)}h5{font-size:var(--orion-font-size-title5, 18px);line-height:var(--orion-line-height-md, 24px)}h6{font-size:var(--orion-font-size-title6, 13px);line-height:var(--orion-line-height-sm, 16px)}label{font-size:var(--orion-font-size-label, 18px);line-height:var(--orion-line-height-md, 24px)}p,li{font-size:var(--orion-font-size-body, 18px);line-height:var(--orion-line-height-md, 24px)}small{font-size:var(--orion-font-size-small, 13px);line-height:var(--orion-line-height-sm, 16px)}sup,sub{vertical-align:baseline;position:relative;top:-0.4em}sub{top:0.4em}strong,b{font-weight:var(--orion-font-weight-semi-bold, 600)}@media screen and (min-width: 769px){body{font-size:var(--orion-font-size-body, 16px)}h5{font-size:var(--orion-font-size-title5, 16px)}label{font-size:var(--orion-font-size-label, 16px)}p,li{font-size:var(--orion-font-size-body, 16px)}}@media (hover: none){a:hover{color:var(--orion-color-activation, #6244bb);text-decoration:underline}}:host{display:block;outline:none}fieldset{border:none}.orion-radio-group--inline{position:relative;display:flex;flex-direction:column}@media screen and (min-width: 769px){.orion-radio-group--inline{position:relative;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-items:flex-start;align-content:flex-start;-moz-column-gap:56px;column-gap:56px;row-gap:0px}}";

const OrionRadioButtonGroup$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.valueChanged = createEvent(this, "valueChanged", 7);
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
  static get style() { return orionRadioButtonGroupCss; }
}, [1, "orion-radio-button-group", {
    "name": [1],
    "value": [1025],
    "disabled": [4],
    "required": [4],
    "inline": [4]
  }, [[0, "radioButtonChanged", "onRadioChanged"], [0, "keydown", "handleKeyPress"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-radio-button-group"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-radio-button-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionRadioButtonGroup$1);
      }
      break;
  } });
}

const OrionRadioButtonGroup = OrionRadioButtonGroup$1;
const defineCustomElement = defineCustomElement$1;

export { OrionRadioButtonGroup, defineCustomElement };
