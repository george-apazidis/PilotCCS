import { Host, h } from '@stencil/core';
import flatpickr from 'flatpickr';
export class OrionDateCalendarModal {
  constructor() {
    // How many months to show on the calendar
    // TODO: change this based on min/max dates
    this.monthCount = 12;
    // Flatpickr instance
    this.flatpickerInstance = null;
    // Mutation Observer to watch flatpickr updates and apply month header transforms
    this.mutationObserver = null;
    // reference to the monthly header elements
    this.monthHeaders = [];
    // reference to the weekday header elements
    this.weekDayHeaders = [];
    // reference to the monthly elements
    this.dayContainers = [];
    // padding for modal logic
    this.originalPaddingRight = 0;
    // overflow for modal logic
    this.originalOverflow = 'auto';
    // height for modal logic
    this.originalHeight = 'auto';
    this.scrollContainer = null;
    this.currentScrollPos = 0;
    this.onValueUpdate = () => {
      var _a, _b;
      this.currentScrollPos = (_b = (_a = this.scrollContainer) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0;
    };
    this.queryElements = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      this.monthHeaders = (_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.flatpickr-month')) !== null && _b !== void 0 ? _b : [];
      this.weekDayHeaders = (_d = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelectorAll('.flatpickr-weekdaycontainer')) !== null && _d !== void 0 ? _d : [];
      this.dayContainers = (_f = (_e = this.el.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelectorAll('.dayContainer')) !== null && _f !== void 0 ? _f : [];
      this.innerContainer = (_g = this.el.shadowRoot) === null || _g === void 0 ? void 0 : _g.querySelector('.flatpickr-innerContainer');
    };
    this.onCalendarReady = () => {
      var _a;
      this.queryElements();
      this.adjustHeaderElements();
      if (!this.mutationObserver) {
        const div = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.flatpickr-days');
        this.mutationObserver = new MutationObserver(this.onCalendarDaysChanged);
        this.mutationObserver.observe(div, { childList: true });
      }
    };
    this.onCalendarDaysChanged = (mutations) => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes[0] && mutation.addedNodes[0].clientHeight > 0) {
          this.adjustSelectedMonth();
          this.adjustHeaderElements(mutation.addedNodes);
        }
      });
    };
    this.adjustHeaderElements = (months = this.dayContainers) => {
      var _a, _b, _c, _d;
      // starting margin from top
      let headerOffset = 23;
      for (let i = 0; i < this.monthCount; i += 1) {
        const headerDiv = (_a = this.headings[i]) !== null && _a !== void 0 ? _a : document.createElement('div');
        // increase offset based on previous month's height + top margin of each month
        if (i > 0) {
          const previousMonthHeight = months[i - 1].getBoundingClientRect().height;
          headerOffset += previousMonthHeight;
          headerOffset += 100;
        }
        headerDiv.style.top = `${headerOffset}px`;
        // if the heading doesn't exist, add a class, append elements, and save to state
        if (!this.headings[i]) {
          headerDiv.classList.add('flatpickr-override__header');
          headerDiv.prepend(this.weekDayHeaders[i]);
          headerDiv.prepend(this.monthHeaders[i]);
          (_b = this.innerContainer) === null || _b === void 0 ? void 0 : _b.append(headerDiv);
          this.headings[i] = headerDiv;
        }
        if (((_c = this.innerContainer) === null || _c === void 0 ? void 0 : _c.childNodes) && !Array.from(this.innerContainer.childNodes).includes(this.headings[i])) {
          (_d = this.innerContainer) === null || _d === void 0 ? void 0 : _d.append(headerDiv);
        }
      }
    };
    this.scrollToSelectedElement = (instant = false) => {
      var _a;
      if (this.flatpickerInstance) {
        (_a = this.flatpickerInstance.selectedDateElem) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: instant ? 'auto' : 'smooth', block: 'center' });
      }
    };
    this.updateDocumentStyling = () => {
      if (this.isOpen && this.isMobile) {
        // get width of scrollbar
        const scrollBarWidth = window.innerWidth - document.body.clientWidth;
        // add padding right to body so the content doesn't shift when scrollbar disapears
        document.body.style.paddingRight = `${this.originalPaddingRight + scrollBarWidth}px`;
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      }
      else {
        // reset padding
        document.body.style.paddingRight = `${this.originalPaddingRight}px`;
        // Allow body to scroll when modal is closed
        document.body.style.overflow = this.originalOverflow;
        document.body.style.height = this.originalHeight;
      }
    };
    this.handleInputChange = (dates, _, instance) => {
      if (this.range) {
        const newDates = dates.map(date => instance.formatDate(date, this.dateFormat));
        if (!newDates[1])
          newDates[1] = '';
        this.localDates = newDates;
      }
      else {
        this.localDates = [instance.formatDate(dates[0], this.dateFormat), ''];
      }
    };
    this.handleClose = () => {
      this.closeDateModal.emit();
    };
    this.handleSelectDates = () => {
      var _a, _b;
      this.selectModalDates.emit({ dates: (_b = (_a = this.flatpickerInstance) === null || _a === void 0 ? void 0 : _a.selectedDates) !== null && _b !== void 0 ? _b : [] });
      this.handleClose();
    };
    this.getModalClasses = () => {
      return `
      orion-date-calendar-modal
      orion-date-calendar-modal--${this.isOpen ? 'open' : 'closed'}
      flatpickr-override
      flatpickr-override--modal
    `;
    };
    this.getDateSelectionClasses = (buttonIndex) => {
      let selected = false;
      if (buttonIndex === 0) {
        if (this.range) {
          selected = !this.localDates[0] || (!!this.localDates[0] && !!this.localDates[1]);
        }
      }
      else {
        selected = !!this.localDates[0] && !this.localDates[1];
      }
      return `
    orion-date-calendar-modal__date-selection-label
    orion-date-calendar-modal__date-selection-label--${selected ? 'selected' : 'empty'}
    `;
    };
    this.getDateSelectionSpanClasses = (dateIndex) => {
      return `
    orion-date-calendar-modal__selected-date
    orion-date-calendar-modal__selected-date--${this.localDates[dateIndex] ? 'selected' : 'empty'}
    `;
    };
    this.label = undefined;
    this.startingDate = new Date();
    this.flatpickrConfig = undefined;
    this.dates = ['', ''];
    this.isOpen = undefined;
    this.range = undefined;
    this.dateFormat = undefined;
    this.firstDateLabel = undefined;
    this.secondDateLabel = '';
    this.headings = [];
    this.localDates = ['', ''];
    this.isMobile = false;
  }
  componentWillLoad() {
    this.originalPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    this.originalHeight = document.body.style.height === '' ? 'auto' : document.body.style.height;
    this.originalOverflow = window.getComputedStyle(document.body).getPropertyValue('overflow');
    this.setIsMobile();
    this.queryElements();
  }
  componentDidLoad() {
    var _a;
    this.flatpickerInstance = flatpickr(this.dateInput, Object.assign(Object.assign({}, this.flatpickrConfig), { disableMobile: false, inline: true, showMonths: this.monthCount, onReady: this.onCalendarReady, onChange: this.handleInputChange, onDayCreate: undefined, onValueUpdate: this.onValueUpdate }));
    this.scrollContainer = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.flatpickr-calendar');
  }
  adjustSelectedMonth() {
    if (!this.scrollContainer || !this.flatpickerInstance)
      return;
    if (this.flatpickerInstance.currentMonth !== this.startingDate.getMonth()) {
      this.flatpickerInstance.changeMonth(this.startingDate.getMonth(), false);
    }
    if (this.flatpickerInstance.currentYear !== this.startingDate.getFullYear()) {
      this.flatpickerInstance.changeYear(this.startingDate.getFullYear());
      this.scrollContainer.scrollTop = this.currentScrollPos;
    }
  }
  handleResize() {
    if (this.isOpen) {
      this.setIsMobile();
      this.adjustHeaderElements();
    }
  }
  setIsMobile() {
    this.isMobile = window.innerWidth <= 768;
  }
  handleOpen() {
    if (this.isOpen) {
      // prepopulate flatpickr & local date state
      this.localDates = this.dates;
      if (this.flatpickerInstance) {
        this.flatpickerInstance.setDate(this.dates);
        setTimeout(() => {
          this.scrollToSelectedElement();
        });
      }
      this.setIsMobile();
      this.queryElements();
    }
    this.updateDocumentStyling();
  }
  render() {
    return (h(Host, null, h("div", { class: this.getModalClasses() }, h("div", { class: "orion-date-calendar-modal__label" }, h("h2", { class: "orion-date-calendar-modal__label-heading" }, this.label), h("button", { class: "orion-date-calendar-modal__close-button", onClick: this.handleClose, "aria-label": "Cancels date selection and closes the calendar date picker." }, h("i", { class: "orion-icon orion-icon-close" }))), h("div", { class: "orion-date-calendar-modal__date-selections" }, h("p", { class: this.getDateSelectionClasses(0) }, this.firstDateLabel, h("span", { class: this.getDateSelectionSpanClasses(0) }, this.localDates[0] || `Select a date`)), this.range && (h("p", { class: this.getDateSelectionClasses(1) }, this.secondDateLabel, h("span", { class: this.getDateSelectionSpanClasses(1) }, this.localDates[1] || `Select a date`)))), h("div", { class: "orion-date-calendar-modal__flatpickr" }, h("input", { ref: el => {
        this.dateInput = el;
      }, class: "orion-date-calendar-modal__date-input", name: "orion-date", id: "orion-date", tabIndex: -1 })), h("orion-button", { disabled: !this.localDates[0] || (this.range && !this.localDates[1]), onClick: this.handleSelectDates, class: "orion-date-calendar-modal__button", sticky: true, variant: "primary" }, `Select date${this.range ? 's' : ''}`))));
  }
  static get is() { return "orion-date-calendar-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-date-calendar-modal.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-date-calendar-modal.css"]
    };
  }
  static get properties() {
    return {
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Label to appear at the top of the modal"
        },
        "attribute": "label",
        "reflect": false
      },
      "startingDate": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Date",
          "resolved": "Date",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Month that flatpickr calendar starts at\nTODO: base this off min date or create a buffer + scroll to current month"
        },
        "defaultValue": "new Date()"
      },
      "flatpickrConfig": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Partial<BaseOptions>",
          "resolved": "{ allowInput?: boolean | undefined; allowInvalidPreload?: boolean | undefined; altFormat?: string | undefined; altInput?: boolean | undefined; altInputClass?: string | undefined; animate?: boolean | undefined; appendTo?: HTMLElement | undefined; ariaDateFormat?: string | undefined; autoFillDefaultTime?: boolean | undefined; clickOpens?: boolean | undefined; closeOnSelect?: boolean | undefined; conjunction?: string | undefined; dateFormat?: string | undefined; defaultDate?: DateOption | DateOption[] | undefined; defaultHour?: number | undefined; defaultMinute?: number | undefined; defaultSeconds?: number | undefined; disable?: DateLimit<DateOption>[] | undefined; disableMobile?: boolean | undefined; enable?: DateLimit<DateOption>[] | undefined; enableSeconds?: boolean | undefined; enableTime?: boolean | undefined; errorHandler?: ((e: Error) => void) | undefined; formatDate?: ((date: Date, format: string, locale: Locale) => string) | undefined; getWeek?: ((date: Date) => string | number) | undefined; hourIncrement?: number | undefined; ignoredFocusElements?: HTMLElement[] | undefined; inline?: boolean | undefined; locale?: key | Partial<CustomLocale> | undefined; maxDate?: DateOption | undefined; maxTime?: DateOption | undefined; minDate?: DateOption | undefined; minTime?: DateOption | undefined; minuteIncrement?: number | undefined; mode?: \"range\" | \"single\" | \"multiple\" | \"time\" | undefined; monthSelectorType?: \"static\" | \"dropdown\" | undefined; nextArrow?: string | undefined; noCalendar?: boolean | undefined; now?: DateOption | undefined; onChange?: Hook | Hook[] | undefined; onClose?: Hook | Hook[] | undefined; onDayCreate?: Hook | Hook[] | undefined; onDestroy?: Hook | Hook[] | undefined; onKeyDown?: Hook | Hook[] | undefined; onMonthChange?: Hook | Hook[] | undefined; onOpen?: Hook | Hook[] | undefined; onParseConfig?: Hook | Hook[] | undefined; onReady?: Hook | Hook[] | undefined; onValueUpdate?: Hook | Hook[] | undefined; onYearChange?: Hook | Hook[] | undefined; onPreCalendarPosition?: Hook | Hook[] | undefined; parseDate?: ((date: string, format: string) => Date) | undefined; plugins?: Plugin<{}>[] | undefined; position?: \"auto\" | \"above\" | \"below\" | \"auto left\" | \"auto center\" | \"auto right\" | \"above left\" | \"above center\" | \"above right\" | \"below left\" | \"below center\" | \"below right\" | ((self: Instance, customElement: HTMLElement | undefined) => void) | undefined; positionElement?: Element | undefined; prevArrow?: string | undefined; shorthandCurrentMonth?: boolean | undefined; static?: boolean | undefined; showMonths?: number | undefined; time_24hr?: boolean | undefined; weekNumbers?: boolean | undefined; wrap?: boolean | undefined; }",
          "references": {
            "Partial": {
              "location": "global"
            },
            "BaseOptions": {
              "location": "import",
              "path": "flatpickr/dist/types/options"
            }
          }
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Config for flatpickr"
        }
      },
      "dates": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Selected dates to show"
        },
        "defaultValue": "['', '']"
      },
      "isOpen": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether the modal is open or not"
        },
        "attribute": "is-open",
        "reflect": false
      },
      "range": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If the flatpickr config is ranged or not"
        },
        "attribute": "range",
        "reflect": false
      },
      "dateFormat": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Format to be used by the date inputs & calendar\nFollows spec at https://flatpickr.js.org/formatting/"
        },
        "attribute": "date-format",
        "reflect": false
      },
      "firstDateLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Label for first date"
        },
        "attribute": "first-date-label",
        "reflect": false
      },
      "secondDateLabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Label for second date"
        },
        "attribute": "second-date-label",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "headings": {},
      "localDates": {},
      "isMobile": {}
    };
  }
  static get events() {
    return [{
        "method": "selectModalDates",
        "name": "selectModalDates",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits `selectModalDates` event that `orion-date-input` can listen for"
        },
        "complexType": {
          "original": "{ dates: Date[] }",
          "resolved": "{ dates: Date[]; }",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "closeDateModal",
        "name": "closeDateModal",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits `closeDateModal` event that `orion-date-input` can listen for"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "isOpen",
        "methodName": "handleOpen"
      }];
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleResize",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
