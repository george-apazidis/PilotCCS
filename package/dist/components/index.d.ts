/* OrionWebComponents custom elements */
export { OrionAccordion as OrionAccordion } from '../types/components/orion-accordion/orion-accordion';
export { OrionButton as OrionButton } from '../types/components/orion-button/orion-button';
export { OrionCheckbox as OrionCheckbox } from '../types/components/orion-checkbox/orion-checkbox';
export { OrionCheckboxGroup as OrionCheckboxGroup } from '../types/components/orion-checkbox-group/orion-checkbox-group';
export { OrionChip as OrionChip } from '../types/components/orion-chip/orion-chip';
export { OrionDateCalendarModal as OrionDateCalendarModal } from '../types/components/orion-date-input/orion-date-calendar-modal/orion-date-calendar-modal';
export { OrionDateInput as OrionDateInput } from '../types/components/orion-date-input/orion-date-input';
export { OrionDrawer as OrionDrawer } from '../types/components/orion-drawer/orion-drawer';
export { OrionDropdown as OrionDropdown } from '../types/components/orion-dropdown/orion-dropdown';
export { OrionDropdownOption as OrionDropdownOption } from '../types/components/orion-dropdown-option/orion-dropdown-option';
export { OrionError as OrionError } from '../types/components/orion-error/orion-error';
export { OrionLabel as OrionLabel } from '../types/components/orion-label/orion-label';
export { OrionLink as OrionLink } from '../types/components/orion-link/orion-link';
export { OrionList as OrionList } from '../types/components/orion-list/orion-list';
export { OrionListItem as OrionListItem } from '../types/components/orion-list-item/orion-list-item';
export { OrionMessage as OrionMessage } from '../types/components/orion-message/orion-message';
export { OrionModal as OrionModal } from '../types/components/orion-modal/orion-modal';
export { OrionNote as OrionNote } from '../types/components/orion-note/orion-note';
export { OrionPopover as OrionPopover } from '../types/components/orion-popover/orion-popover';
export { OrionProgressMeter as OrionProgressMeter } from '../types/components/orion-progress-meter/orion-progress-meter';
export { OrionRadioButton as OrionRadioButton } from '../types/components/orion-radio-button/orion-radio-button';
export { OrionRadioButtonGroup as OrionRadioButtonGroup } from '../types/components/orion-radio-button-group/orion-radio-button-group';
export { OrionStepper as OrionStepper } from '../types/components/orion-stepper/orion-stepper';
export { OrionTab as OrionTab } from '../types/components/orion-tab/orion-tab';
export { OrionTabPanel as OrionTabPanel } from '../types/components/orion-tab-panel/orion-tab-panel';
export { OrionTabs as OrionTabs } from '../types/components/orion-tabs/orion-tabs';
export { OrionTextInput as OrionTextInput } from '../types/components/orion-text-input/orion-text-input';
export { OrionTextarea as OrionTextarea } from '../types/components/orion-textarea/orion-textarea';
export { OrionToggle as OrionToggle } from '../types/components/orion-toggle/orion-toggle';
export { OrionToggleGroup as OrionToggleGroup } from '../types/components/orion-toggle-group/orion-toggle-group';
export { OrionTooltip as OrionTooltip } from '../types/components/orion-tooltip/orion-tooltip';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
