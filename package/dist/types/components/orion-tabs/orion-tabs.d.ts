import { EventEmitter } from '../../stencil-public-runtime';
export declare type TabSelectionEvent = {
  tabIndex: number;
};
export declare type Direction = 'right' | 'left';
/**
 * @slot default - default slot for the tab labels
 */
export declare class OrionTabs {
  el: HTMLElement;
  /**
   * Default and current active tab index
   */
  activeTab: number;
  /**
   * Component will scroll to the starting active tab
   */
  scrollToStartingActiveTab: boolean;
  /**
   * The minimum width for tabs
   */
  minTabWidth: string;
  /**
   * Emits event when a tab header is clicked
   */
  orionTabSelected: EventEmitter<TabSelectionEvent>;
  tabCount: number;
  panelCount: number;
  intersectionMap: Record<string, {
    isVisible: boolean;
    isLeft: boolean;
    isRight: boolean;
  }>;
  tabsToTheLeft: number;
  tabsToTheRight: number;
  activeTabSide: 'left' | 'middle' | 'right';
  focused: boolean;
  private tabsList;
  private tabButtons;
  private slotEl;
  private observer;
  private isMouseDown;
  private startingMouseX;
  private currentMouseX;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  onActiveTabChange(): void;
  private scrollToActiveTab;
  private parseChildren;
  private setupIntersection;
  private intersectionCallback;
  computeOffscreenButtonCounts(): void;
  private getTabId;
  private computeActiveTabSide;
  private onSideBtnClick;
  onMouseDown: (e: MouseEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  private resetMouse;
  onMouseUp: (e: MouseEvent) => void;
  onMouseLeave: () => void;
  private onTabSelected;
  /**
   * When the list has gained focus
   * If the focus is coming in from another element, update our intersection observers
   */
  private onListFocusIn;
  /**
   * When list has lost focus
   * Make sure that focus has left the list, and not just gone from one button to another
   */
  private onListFocusOut;
  private onButtonKeyDown;
  private getNavButtonClasses;
  private getTabItemClasses;
  render(): any;
}
