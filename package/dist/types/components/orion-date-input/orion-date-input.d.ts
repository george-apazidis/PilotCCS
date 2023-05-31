import { EventEmitter } from '../../stencil-public-runtime';
import { BaseOptions } from 'flatpickr/dist/types/options';
export declare type DateSelectionEvent = {
  startDate?: Date;
  endDate?: Date;
};
/**
 * @slot orion-date-input-first-label - slot for first input's label
 * @slot orion-date-input-second-label - slot for second input's label
 */
export declare class OrionDateInput {
  el: HTMLElement;
  /**
   * Shows two inputs, and calendar is in range mode
   */
  range: boolean;
  /**
   * Placeholder for the date inputs
   */
  placeholder: string;
  /**
   * Format to be used by the date inputs & calendar
   * Follows spec at https://flatpickr.js.org/formatting/
   */
  dateFormat: string;
  /**
   * Inclusive minimum date (time is removed from limit)
   */
  minDate?: Date | string;
  /**
   * Inclusive maximum date (time is removed from limit)
   */
  maxDate?: Date | string;
  /**
   * Makes the calendar show two months
   */
  multiMonth: boolean;
  /**
   * Error state of input
   */
  error: boolean;
  /**
   * Disabled state of input
   */
  disabled: boolean;
  /**
   * Shows the first-label inline with the input
   */
  inline: boolean;
  /**
   * Emits 'orionDateSelected' event when a date is selected
   */
  orionDateSelected: EventEmitter<DateSelectionEvent>;
  isCalendarOpen: boolean;
  isModalOpen: boolean;
  dates: string[];
  inputValidity: boolean[];
  flatpickrConfig: Partial<BaseOptions>;
  isMobile: boolean;
  firstSlotLabel: string;
  secondSlotLabel: string;
  private dateInput;
  private calendarOpenButton;
  private flatpickrInstance;
  hasFirstLabelSlot: boolean;
  hasSecondLabelSlot: boolean;
  hasConditionalSlot: boolean;
  get isValid(): boolean | "";
  handleResize(): void;
  private setIsMobile;
  private toggleCalendar;
  closeModal(): void;
  private onCalendarOpen;
  private onCalendarClose;
  private onCalendarDayCreate;
  onModalDateSelect(event: CustomEvent<{
    dates: Date[];
  }>): void;
  private onCalendarChange;
  private adjustForSlashes;
  handleOnInput: (e: InputEvent, inputIndex: 0 | 1) => void;
  checkDateValidaty: () => void;
  private convertMinMaxDates;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private adjustInputLabelConditionals;
  private adjustInputLabelPositioning;
  private getWrapperClasses;
  private getDateInputClasses;
  private getButtonCSSClasses;
  private getInputCSSClasses;
  private getInputs;
  render(): any;
}
