import { EventEmitter } from '../../../stencil-public-runtime';
import { BaseOptions, Hook } from 'flatpickr/dist/types/options';
export declare class OrionDateCalendarModal {
  el: HTMLElement;
  /**
   * Label to appear at the top of the modal
   */
  label: string;
  /**
   * Month that flatpickr calendar starts at
   * TODO: base this off min date or create a buffer + scroll to current month
   */
  startingDate: Date;
  /**
   * Config for flatpickr
   */
  flatpickrConfig: Partial<BaseOptions>;
  /**
   * Selected dates to show
   */
  dates: string[];
  /**
   * Whether the modal is open or not
   */
  isOpen: boolean;
  /**
   * If the flatpickr config is ranged or not
   */
  range: boolean;
  /**
   * Format to be used by the date inputs & calendar
   * Follows spec at https://flatpickr.js.org/formatting/
   */
  dateFormat: string;
  /**
   * Label for first date
   */
  firstDateLabel: string;
  /**
   * Label for second date
   */
  secondDateLabel?: string | undefined;
  /**
   * Emits `selectModalDates` event that `orion-date-input` can listen for
   */
  selectModalDates: EventEmitter<{
    dates: Date[];
  }>;
  /**
   * Emits `closeDateModal` event that `orion-date-input` can listen for
   */
  closeDateModal: EventEmitter;
  headings: HTMLElement[];
  localDates: string[];
  isMobile: boolean;
  private monthCount;
  private dateInput;
  private flatpickerInstance;
  private mutationObserver;
  private monthHeaders;
  private weekDayHeaders;
  private dayContainers;
  private innerContainer?;
  private originalPaddingRight;
  private originalOverflow;
  private originalHeight;
  private scrollContainer?;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private currentScrollPos;
  private onValueUpdate;
  private adjustSelectedMonth;
  private queryElements;
  onCalendarReady: Hook | Hook[];
  onCalendarDaysChanged: (mutations: MutationRecord[]) => void;
  private adjustHeaderElements;
  handleResize(): void;
  private setIsMobile;
  handleOpen(): void;
  private scrollToSelectedElement;
  updateDocumentStyling: () => void;
  handleInputChange: Hook;
  private handleClose;
  private handleSelectDates;
  private getModalClasses;
  private getDateSelectionClasses;
  private getDateSelectionSpanClasses;
  render(): any;
}
