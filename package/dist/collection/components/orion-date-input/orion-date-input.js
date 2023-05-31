import { Host, h } from '@stencil/core';
import classNames from 'classnames';
import flatpickr from 'flatpickr';
const DATE_SEPARATOR = '|';
const isCompleteDate = ({ datestring }) => {
  return /^\d{1,2}\/\d{1,2}\/\d{4}$/gi.test(datestring);
};
const isPastMinimumDate = ({ datestring, minimumDate }) => {
  if (!minimumDate)
    return true;
  const date = new Date(datestring);
  return date.getTime() >= new Date(minimumDate.toDateString()).getTime();
};
const isBeforeMaximumDate = ({ datestring, maximumDate }) => {
  if (!maximumDate)
    return true;
  const date = new Date(datestring);
  return date.getTime() <= new Date(maximumDate.toDateString()).getTime();
};
const dateValidators = [isCompleteDate, isPastMinimumDate, isBeforeMaximumDate];
/**
 * @slot orion-date-input-first-label - slot for first input's label
 * @slot orion-date-input-second-label - slot for second input's label
 */
export class OrionDateInput {
  constructor() {
    // flatpickr object instance that controls the current calendar
    this.flatpickrInstance = null;
    this.hasFirstLabelSlot = false;
    this.hasSecondLabelSlot = false;
    this.hasConditionalSlot = false;
    this.toggleCalendar = () => {
      var _a, _b;
      this.isModalOpen = !this.isModalOpen;
      if (!this.isCalendarOpen) {
        (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.open();
      }
      else {
        (_b = this.flatpickrInstance) === null || _b === void 0 ? void 0 : _b.close();
      }
    };
    this.onCalendarOpen = (_selectedDates, _, instance) => {
      var _a, _b;
      if (!this.isMobile) {
        if (instance.selectedDateElem) {
          (_a = instance.selectedDateElem) === null || _a === void 0 ? void 0 : _a.focus();
        }
        else {
          (_b = instance.todayDateElem) === null || _b === void 0 ? void 0 : _b.focus();
        }
      }
      this.isCalendarOpen = true;
    };
    this.onCalendarClose = (_selectedDates, _, instance) => {
      if (!this.isMobile) {
        this.calendarOpenButton.focus();
        this.isModalOpen = false;
        setTimeout(() => {
          this.isCalendarOpen = false;
          instance.setDate(this.dates);
        }, 100);
      }
    };
    // hide previous / next month days to match design. This way flatpickr will ignore these elements and not index them for keyboard controls
    this.onCalendarDayCreate = (_, __, ___, dayElem) => {
      if (dayElem.classList.contains('nextMonthDay') || dayElem.classList.contains('prevMonthDay')) {
        dayElem.classList.add('flatpickr-disabled');
        dayElem.classList.add('hidden');
      }
    };
    this.onCalendarChange = (dates, _, instance) => {
      var _a;
      if (this.range) {
        const newDates = dates.map(date => instance.formatDate(date, this.dateFormat));
        if (!newDates[1])
          newDates[1] = '';
        this.dates = newDates;
      }
      else {
        this.dates = [instance.formatDate(dates[0], this.dateFormat), ''];
      }
      if (this.isMobile) {
        (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.setDate(dates);
      }
      this.checkDateValidaty();
      this.orionDateSelected.emit({
        startDate: dates[0],
        endDate: dates[1],
      });
    };
    this.adjustForSlashes = (datestring, input) => {
      var _a;
      let adjustedString = datestring;
      // append a forward slash to the cases:
      // '##' | '#/##' | '##/##'
      if (/^\d{2}$/gi.test(datestring) || /^\d{1,2}\/\d{2}$/gi.test(adjustedString)) {
        adjustedString += '/';
      }
      if (/\/\//gi.test(adjustedString)) {
        const curPos = (_a = input.selectionStart) !== null && _a !== void 0 ? _a : 0;
        adjustedString = adjustedString.replace(/\/{2,}/gi, '/');
        input.value = adjustedString;
        // reset cursor after setting input value
        input.selectionEnd = curPos - 1;
      }
      return adjustedString;
    };
    this.handleOnInput = (e, inputIndex) => {
      var _a;
      let newDateString = e.target.value;
      if (e.data) {
        newDateString = this.adjustForSlashes(newDateString, e.target);
      }
      // spread / update array of date strings
      const newDates = [...this.dates];
      newDates[inputIndex] = newDateString;
      this.dates = newDates;
      this.checkDateValidaty();
      this.orionDateSelected.emit({
        startDate: this.dates[0] ? new Date(this.dates[0]) : undefined,
        endDate: this.dates[1] ? new Date(this.dates[1]) : undefined,
      });
      // even if date is invalid, pass it along to flatpickr so that the calendar doesn't keep old date
      (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.setDate(newDates);
    };
    this.checkDateValidaty = () => {
      const validity = [false, false];
      this.dates.forEach((datestring, i) => {
        const dateToValidate = {
          datestring,
          minimumDate: this.minDate,
          maximumDate: this.maxDate,
        };
        const isValidDate = dateValidators.reduce((isValid, comparitor) => {
          // if already invalid, skip comparison
          if (!isValid || !comparitor(dateToValidate))
            return false;
          if (isValid)
            return true;
          return false;
        }, true);
        validity[i] = isValidDate;
      });
      // if not a range, set second date to always be valid
      if (!this.range)
        validity[1] = true;
      this.inputValidity = validity;
    };
    this.convertMinMaxDates = () => {
      if (typeof this.minDate === 'string') {
        const minDateAsDate = new Date(this.minDate);
        if (minDateAsDate.toString() !== 'Invalid Date') {
          this.minDate = minDateAsDate;
        }
      }
      if (typeof this.maxDate === 'string') {
        const maxDateAsDate = new Date(this.maxDate);
        if (maxDateAsDate.toString() !== 'Invalid Date') {
          this.maxDate = maxDateAsDate;
        }
      }
    };
    this.adjustInputLabelConditionals = () => {
      var _a, _b;
      const firstLabel = this.el.querySelector('[slot="orion-date-input-first-label"]');
      const secondLabel = this.el.querySelector('[slot="orion-date-input-second-label"]');
      let firstConditional = firstLabel === null || firstLabel === void 0 ? void 0 : firstLabel.querySelector('[slot="orion-label-conditional"]');
      let secondConditional = secondLabel === null || secondLabel === void 0 ? void 0 : secondLabel.querySelector('[slot="orion-label-conditional"]');
      this.hasFirstLabelSlot = Boolean(firstLabel === null || firstLabel === void 0 ? void 0 : firstLabel.textContent);
      this.hasSecondLabelSlot = Boolean(secondLabel === null || secondLabel === void 0 ? void 0 : secondLabel.textContent);
      // apply ids for a11y, and grab label text for mobile modal
      if (firstLabel) {
        firstLabel.id = 'firstInputLabel';
        this.firstSlotLabel = (_a = firstLabel.textContent) !== null && _a !== void 0 ? _a : '';
        // remove conditional text if it exists
        const labelConditional = firstLabel.querySelector('[slot="orion-label-conditional"]');
        if (labelConditional === null || labelConditional === void 0 ? void 0 : labelConditional.textContent)
          this.firstSlotLabel = this.firstSlotLabel.replace(labelConditional.textContent, '');
      }
      if (secondLabel) {
        secondLabel.id = 'secondInputLabel';
        this.secondSlotLabel = (_b = secondLabel.textContent) !== null && _b !== void 0 ? _b : '';
        // remove conditional text if it exists
        const labelConditional = secondLabel.querySelector('[slot="orion-label-conditional"]');
        if (labelConditional === null || labelConditional === void 0 ? void 0 : labelConditional.textContent)
          this.secondSlotLabel = this.secondSlotLabel.replace(labelConditional.textContent, '');
      }
      // if conditional is only within the first label, but we have a second label
      if (secondLabel && firstConditional && !secondConditional) {
        const newSecondConditional = document.createElement(firstConditional.tagName);
        newSecondConditional.innerHTML = firstConditional.innerHTML;
        newSecondConditional.setAttribute('slot', firstConditional.slot);
        secondConditional = newSecondConditional;
        secondLabel === null || secondLabel === void 0 ? void 0 : secondLabel.append(newSecondConditional);
      }
      // if we have 2 labels (w/ conditional only on 2nd)
      if (firstLabel && secondConditional && !firstConditional) {
        const newFirstConditional = document.createElement(secondConditional.tagName);
        newFirstConditional.innerHTML = secondConditional.innerHTML;
        newFirstConditional.setAttribute('slot', secondConditional.slot);
        firstLabel === null || firstLabel === void 0 ? void 0 : firstLabel.append(newFirstConditional);
        firstConditional = newFirstConditional;
      }
      // if we have a first conditional with a second label (which should have a conditional (either from the get go - or copied over here))
      if (firstConditional && secondLabel) {
        firstConditional.classList.add('visually-hidden');
      }
    };
    this.adjustInputLabelPositioning = () => {
      var _a;
      const labelHolder = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.orion-date-input__label');
      const firstLabel = this.el.querySelector('[slot="orion-date-input-first-label"]');
      const secondLabel = this.el.querySelector('[slot="orion-date-input-second-label"]');
      if (firstLabel) {
        labelHolder === null || labelHolder === void 0 ? void 0 : labelHolder.append(firstLabel);
      }
      if (secondLabel) {
        labelHolder === null || labelHolder === void 0 ? void 0 : labelHolder.append(secondLabel);
      }
    };
    this.getWrapperClasses = () => {
      return `
      orion-date-input__wrapper
      orion-date-input__wrapper--${this.inline ? 'inline' : 'stacked'}
    `;
    };
    this.getDateInputClasses = () => {
      return classNames('orion-date-input__inner-wrapper', 'flatpickr-override', 'flatpickr-override--desktop', {
        'orion-date-input__inner-wrapper--error': this.error,
        'orion-date-input__inner-wrapper--disabled': this.disabled,
      });
    };
    this.getButtonCSSClasses = () => {
      return `
      orion-date-input__button
      orion-date-input__button--${this.isCalendarOpen ? 'open' : 'closed'}
    `;
    };
    this.getInputCSSClasses = (isActive) => {
      return `
      orion-date-input__text-input
      orion-date-input__text-input--${this.range && isActive ? 'active' : 'inactive'}
    `;
    };
    this.getInputs = () => {
      var _a, _b;
      const inputConfigs = [
        {
          dateIndex: 0,
          isActive: !!(((_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.isOpen) && (this.flatpickrInstance.selectedDates.length === 0 || this.flatpickrInstance.selectedDates.length === 2 || !this.dates[0])),
          id: 'firstInput',
          ariaLabelledby: 'firstInputLabel',
        },
        this.range
          ? {
            dateIndex: 1,
            isActive: !!(((_b = this.flatpickrInstance) === null || _b === void 0 ? void 0 : _b.isOpen) && this.flatpickrInstance.selectedDates.length === 1 && !this.dates[1]),
            id: 'secondInput',
            ariaLabelledby: 'secondInputLabel',
          }
          : null,
      ];
      return inputConfigs.map(config => {
        if (!config)
          return null;
        return (h("input", { placeholder: this.placeholder, class: this.getInputCSSClasses(config.isActive), type: "text", disabled: this.disabled, value: this.dates[config.dateIndex], onInput: e => {
            this.handleOnInput(e, config.dateIndex);
          }, pattern: "\\d{1,2}/\\d{1,2}/\\d{4}", id: config.id, "aria-labelledby": config.ariaLabelledby, "aria-invalid": Boolean(this.error).toString(), inputmode: "numeric" }));
      });
    };
    this.range = false;
    this.placeholder = 'mm/dd/yyyy';
    this.dateFormat = 'm/d/Y';
    this.minDate = undefined;
    this.maxDate = undefined;
    this.multiMonth = false;
    this.error = false;
    this.disabled = false;
    this.inline = false;
    this.isCalendarOpen = false;
    this.isModalOpen = false;
    this.dates = ['', ''];
    this.inputValidity = [true, true];
    this.flatpickrConfig = {};
    this.isMobile = false;
    this.firstSlotLabel = '';
    this.secondSlotLabel = '';
  }
  get isValid() {
    const isFirstInputValid = this.dates[0] && this.inputValidity[0];
    const isSecondInputValid = this.dates[1] && this.inputValidity[1];
    return this.range ? isFirstInputValid && isSecondInputValid : isFirstInputValid;
  }
  handleResize() {
    this.setIsMobile();
  }
  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
  closeModal() {
    var _a;
    this.isModalOpen = false;
    (_a = this.flatpickrInstance) === null || _a === void 0 ? void 0 : _a.close();
    this.isCalendarOpen = false;
  }
  onModalDateSelect(event) {
    if (this.flatpickrInstance) {
      this.onCalendarChange(event.detail.dates, '', this.flatpickrInstance);
    }
  }
  componentWillLoad() {
    var _a, _b;
    this.convertMinMaxDates();
    const isMinDateToday = this.minDate ? new Date((_a = this.minDate) === null || _a === void 0 ? void 0 : _a.toDateString()).getTime() === new Date(new Date().toDateString()).getTime() : false;
    const isMaxDateToday = this.maxDate ? new Date((_b = this.maxDate) === null || _b === void 0 ? void 0 : _b.toDateString()).getTime() === new Date(new Date().toDateString()).getTime() : false;
    this.flatpickrConfig = {
      static: true,
      dateFormat: this.dateFormat,
      minDate: isMinDateToday ? 'today' : this.minDate,
      maxDate: isMaxDateToday ? 'today' : this.maxDate,
      mode: this.range ? 'range' : 'single',
      showMonths: this.multiMonth ? 2 : 1,
      monthSelectorType: 'static',
      nextArrow: '<i class="orion-icon orion-icon-chevron_right"></i>',
      prevArrow: '<i class="orion-icon orion-icon-chevron_left"></i>',
      locale: {
        weekdays: {
          shorthand: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        rangeSeparator: DATE_SEPARATOR,
      },
      onChange: this.onCalendarChange,
      onOpen: this.onCalendarOpen,
      onClose: this.onCalendarClose,
      onDayCreate: this.onCalendarDayCreate,
    };
    this.setIsMobile();
    this.adjustInputLabelConditionals();
  }
  componentDidLoad() {
    var _a;
    this.isCalendarOpen = false;
    this.flatpickrInstance = flatpickr(this.dateInput, this.flatpickrConfig);
    // disable flatpickr's year input
    (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.numInput.cur-year').forEach(el => {
      el.setAttribute('disabled', 'true');
    });
    this.adjustInputLabelPositioning();
  }
  render() {
    return (h(Host, null, h("orion-date-calendar-modal", { isOpen: this.isModalOpen && this.isMobile, label: this.range ? 'Roundtrip' : 'One-way', flatpickrConfig: this.flatpickrConfig, dates: this.dates, range: this.range, dateFormat: this.dateFormat, firstDateLabel: this.firstSlotLabel, secondDateLabel: this.secondSlotLabel }), h("span", { class: this.getWrapperClasses() }, h("div", { class: "orion-date-input__label" }, this.hasFirstLabelSlot && h("slot", { name: "orion-date-input-first-label" }), this.hasSecondLabelSlot && h("slot", { name: "orion-date-input-second-label" })), h("div", { class: this.getDateInputClasses() }, h("div", { class: "orion-date-input__status" }), this.getInputs(), h("button", { onClick: this.toggleCalendar, class: this.getButtonCSSClasses(), ref: el => {
        this.calendarOpenButton = el;
      }, disabled: this.disabled, "aria-label": "Opens a calendar date picker." }, h("i", { class: "orion-date-input__button-icon orion-icon-calendar" })), h("input", { ref: el => {
        this.dateInput = el;
      }, class: `orion-date-input__date-input`, name: "orion-date", id: "orion-date", tabIndex: -1 })))));
  }
  static get is() { return "orion-date-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-date-input.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-date-input.css"]
    };
  }
  static get properties() {
    return {
      "range": {
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
          "text": "Shows two inputs, and calendar is in range mode"
        },
        "attribute": "range",
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
          "text": "Placeholder for the date inputs"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "'mm/dd/yyyy'"
      },
      "dateFormat": {
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
          "text": "Format to be used by the date inputs & calendar\nFollows spec at https://flatpickr.js.org/formatting/"
        },
        "attribute": "date-format",
        "reflect": false,
        "defaultValue": "'m/d/Y'"
      },
      "minDate": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "Date | string",
          "resolved": "Date | string | undefined",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Inclusive minimum date (time is removed from limit)"
        },
        "attribute": "min-date",
        "reflect": true
      },
      "maxDate": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "Date | string",
          "resolved": "Date | string | undefined",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Inclusive maximum date (time is removed from limit)"
        },
        "attribute": "max-date",
        "reflect": true
      },
      "multiMonth": {
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
          "text": "Makes the calendar show two months"
        },
        "attribute": "multi-month",
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
          "text": "Error state of input"
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Disabled state of input"
        },
        "attribute": "disabled",
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
          "text": "Shows the first-label inline with the input"
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isCalendarOpen": {},
      "isModalOpen": {},
      "dates": {},
      "inputValidity": {},
      "flatpickrConfig": {},
      "isMobile": {},
      "firstSlotLabel": {},
      "secondSlotLabel": {}
    };
  }
  static get events() {
    return [{
        "method": "orionDateSelected",
        "name": "orionDateSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits 'orionDateSelected' event when a date is selected"
        },
        "complexType": {
          "original": "DateSelectionEvent",
          "resolved": "{ startDate?: Date | undefined; endDate?: Date | undefined; }",
          "references": {
            "DateSelectionEvent": {
              "location": "local"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleResize",
        "target": "window",
        "capture": false,
        "passive": true
      }, {
        "name": "closeDateModal",
        "method": "closeModal",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "selectModalDates",
        "method": "onModalDateSelect",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
