import { EventEmitter } from '../../stencil-public-runtime';
export interface OrionAccordionToggleEventData {
  visible: boolean;
}
/**
 * @slot orion-accordion-header - slot for accordion header content
 * @slot orion-accorion-panel - slot for accordion panel content
 */
export declare class OrionAccordion {
  /**
   * Accordion is closed by default
   */
  open: boolean;
  /**
   * Chevrons are on the right by default
   */
  chevronLeft: boolean;
  /**
   * Accordion container border
   */
  hasContainer: boolean;
  /**
   * Emitted when the accordion is toggled
   */
  toggle: EventEmitter<OrionAccordionToggleEventData>;
  btnUid: string;
  sectionUid: string;
  toggleComponent(): void;
  componentWillLoad(): void;
  render(): any;
}
