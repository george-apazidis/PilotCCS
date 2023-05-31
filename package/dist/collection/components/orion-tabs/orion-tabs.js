import { Host, h } from '@stencil/core';
/**
 * @slot default - default slot for the tab labels
 */
export class OrionTabs {
  constructor() {
    this.tabButtons = [];
    this.isMouseDown = false;
    this.startingMouseX = 0;
    this.currentMouseX = 0;
    this.scrollToActiveTab = () => {
      const { x, width } = this.tabButtons[this.activeTab].getBoundingClientRect();
      this.tabsList.scrollLeft = x - width / 2;
    };
    this.parseChildren = () => {
      if (!this.slotEl)
        return;
      let tabCount = 0;
      let panelCount = 0;
      this.slotEl.assignedElements().forEach(ele => {
        // assign each generic slot to a specific slot based on component type
        if (ele.tagName === 'ORION-TAB-PANEL') {
          ele.setAttribute('slot', `orion-tab-content-${panelCount}`);
          ele.setAttribute('for', this.el.id);
          ele.setAttribute('panel-index', panelCount.toString());
          panelCount += 1;
        }
        else if (ele.tagName === 'ORION-TAB') {
          ele.setAttribute('slot', `orion-tab-slot-${tabCount}`);
          tabCount += 1;
        }
        else {
          // console.warn('Non-slotted element in component');
        }
      });
      this.tabCount = tabCount;
      this.panelCount = panelCount;
    };
    this.intersectionCallback = (entries) => {
      const { width: parentWidth, left: parentLeft } = this.el.getBoundingClientRect();
      let newIntersectionMap = Object.assign({}, this.intersectionMap);
      entries.forEach(entry => {
        const { boundingClientRect, target, isIntersecting } = entry;
        const middlePosition = boundingClientRect.x + boundingClientRect.width / 2 - parentLeft;
        const isLeft = middlePosition < 0;
        const isRight = middlePosition > parentWidth;
        newIntersectionMap = Object.assign(Object.assign({}, newIntersectionMap), { [target.id]: { isVisible: isIntersecting, isLeft, isRight } });
      });
      this.intersectionMap = newIntersectionMap;
    };
    this.getTabId = (index = this.activeTab) => `${this.el.id}-tab-${index}`;
    this.onSideBtnClick = (direction) => {
      if (direction === 'left' && this.tabsToTheLeft === 1) {
        this.tabsList.scrollLeft = 0;
      }
      else if (direction === 'right' && this.tabsToTheRight === 1) {
        this.tabsList.scrollLeft = this.tabsList.scrollWidth;
      }
      else if (this.tabButtons.length > 0) {
        const buttonWidth = this.tabButtons[0].getBoundingClientRect().width;
        this.tabsList.scrollLeft += (direction === 'right' ? 1 : -1) * buttonWidth;
      }
    };
    this.onMouseDown = (e) => {
      this.startingMouseX = e.x;
      this.currentMouseX = e.x;
      this.isMouseDown = true;
    };
    this.onMouseMove = (e) => {
      if (this.isMouseDown) {
        this.tabsList.classList.add('orion-tabs__list--held');
        const scrollDiff = this.currentMouseX - e.x;
        if (this.tabsList)
          this.tabsList.scrollLeft += scrollDiff;
        this.currentMouseX = e.x;
      }
    };
    this.resetMouse = () => {
      this.tabsList.classList.remove('orion-tabs__list--held');
      this.isMouseDown = false;
    };
    this.onMouseUp = (e) => {
      if (e.x === this.startingMouseX) {
        this.resetMouse();
      }
      else {
        setTimeout(() => {
          this.resetMouse();
        });
      }
    };
    this.onMouseLeave = () => {
      this.resetMouse();
    };
    this.onTabSelected = (tabIndex) => {
      if (this.isMouseDown)
        return;
      this.activeTab = tabIndex;
    };
    /**
     * When the list has gained focus
     * If the focus is coming in from another element, update our intersection observers
     */
    this.onListFocusIn = () => {
      if (this.focused)
        return;
      this.focused = true;
      this.setupIntersection();
    };
    /**
     * When list has lost focus
     * Make sure that focus has left the list, and not just gone from one button to another
     */
    this.onListFocusOut = (e) => {
      const focusMovedTo = e.relatedTarget;
      if (!focusMovedTo) {
        this.focused = false;
        return;
      }
      const currentListItem = focusMovedTo.parentElement;
      const isFocusedContained = Array.from(this.tabsList.childNodes).includes(currentListItem);
      this.focused = isFocusedContained;
    };
    this.onButtonKeyDown = (e, tabIndex) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (tabIndex < this.tabButtons.length - 1) {
          this.tabButtons[tabIndex + 1].focus();
        }
        else {
          this.tabButtons[0].focus();
          this.setupIntersection();
        }
      }
      else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (tabIndex > 0) {
          this.tabButtons[tabIndex - 1].focus();
        }
        else {
          this.tabButtons[this.tabButtons.length - 1].focus();
          this.setupIntersection();
        }
      }
    };
    this.activeTab = 0;
    this.scrollToStartingActiveTab = false;
    this.minTabWidth = '104px';
    this.tabCount = 0;
    this.panelCount = 0;
    this.intersectionMap = {};
    this.tabsToTheLeft = 0;
    this.tabsToTheRight = 0;
    this.activeTabSide = 'middle';
    this.focused = false;
  }
  componentDidLoad() {
    this.parseChildren();
    this.orionTabSelected.emit({ tabIndex: this.activeTab });
  }
  componentDidUpdate() {
    // On the very first componentDidUpdate, the observer will be null
    // waiting until this step insures that the first render has happened and the slots are populated
    if (!this.observer) {
      if (this.scrollToStartingActiveTab) {
        this.scrollToActiveTab();
      }
      // wait until the scroll is done
      setTimeout(() => {
        this.setupIntersection();
      });
    }
  }
  onActiveTabChange() {
    this.computeActiveTabSide();
    this.orionTabSelected.emit({ tabIndex: this.activeTab });
  }
  setupIntersection() {
    if (this.observer)
      this.observer.disconnect();
    this.intersectionMap = {};
    const options = {
      root: this.tabsList,
      rootMargin: '0px',
      threshold: [0.8, 0.2],
    };
    this.observer = new IntersectionObserver(this.intersectionCallback, options);
    const tabs = this.tabsList.querySelectorAll('.orion-tabs__list-item');
    tabs.forEach(element => {
      this.observer.observe(element);
    });
  }
  computeOffscreenButtonCounts() {
    let rightCount = 0;
    let leftCount = 0;
    Object.values(this.intersectionMap).forEach(({ isVisible, isLeft, isRight }) => {
      if (isVisible)
        return;
      if (isLeft)
        leftCount += 1;
      else if (isRight)
        rightCount += 1;
    });
    this.tabsToTheLeft = leftCount;
    this.tabsToTheRight = rightCount;
    this.computeActiveTabSide();
  }
  computeActiveTabSide() {
    const activeId = this.getTabId();
    if (!this.intersectionMap[activeId])
      return;
    const { isVisible, isLeft, isRight } = this.intersectionMap[activeId];
    if (isVisible)
      this.activeTabSide = 'middle';
    else if (isLeft)
      this.activeTabSide = 'left';
    else if (isRight)
      this.activeTabSide = 'right';
  }
  getNavButtonClasses(direction) {
    const isVisible = direction === 'left' ? this.tabsToTheLeft > 0 : this.tabsToTheRight > 0;
    return `
      orion-tabs__nav-button
      orion-tabs__nav-button--${direction}
      orion-tabs__nav-button--${isVisible ? 'visible' : 'hidden'}
      ${this.activeTabSide === direction ? 'orion-tabs__nav-button--offscreen-selection' : ''}
    `;
  }
  getTabItemClasses(isActive) {
    return `
      orion-tabs__list-item
      orion-tabs__list-item--${isActive ? 'active' : 'inactive'}
    `;
  }
  render() {
    const inlineCSS = {
      minWidth: this.minTabWidth,
    };
    return (h(Host, null, h("nav", { class: "orion-tabs" }, h("slot", { ref: el => {
        this.slotEl = el;
      } }), h("button", { onClick: () => this.onSideBtnClick('left'), class: this.getNavButtonClasses('left'), tabIndex: -1 }, h("i", { class: "orion-icon orion-icon-chevron_left" }), Math.max(1, this.tabsToTheLeft)), h("button", { onClick: () => this.onSideBtnClick('right'), class: this.getNavButtonClasses('right'), tabIndex: -1 }, Math.max(1, this.tabsToTheRight), h("i", { class: "orion-icon orion-icon-chevron_right" })), h("ul", { class: "orion-tabs__list", ref: el => {
        this.tabsList = el;
      }, role: "tablist", tabIndex: -1, onFocusout: this.onListFocusOut, onFocusin: this.onListFocusIn, onMouseDown: this.onMouseDown, onMouseMove: this.onMouseMove, onMouseUp: this.onMouseUp, onMouseLeave: this.onMouseLeave }, [...Array(this.tabCount)].map((_, tabIndex) => {
      const isActive = this.activeTab === tabIndex;
      return (h("li", { id: this.getTabId(tabIndex), class: this.getTabItemClasses(isActive), style: inlineCSS }, h("button", { onKeyDown: e => this.onButtonKeyDown(e, tabIndex), tabIndex: isActive ? 0 : -1, role: "tab", "aria-selected": isActive.toString(), class: "orion-tabs__list-button", onClick: () => this.onTabSelected(tabIndex), ref: el => {
          this.tabButtons[tabIndex] = el;
        } }, h("slot", { name: `orion-tab-slot-${tabIndex}` }))));
    }))), [...Array(this.panelCount)].map((_, tabIndex) => {
      return h("slot", { name: `orion-tab-content-${tabIndex}` });
    })));
  }
  static get is() { return "orion-tabs"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-tabs.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-tabs.css"]
    };
  }
  static get properties() {
    return {
      "activeTab": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Default and current active tab index"
        },
        "attribute": "active-tab",
        "reflect": true,
        "defaultValue": "0"
      },
      "scrollToStartingActiveTab": {
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
          "text": "Component will scroll to the starting active tab"
        },
        "attribute": "scroll-to-starting-active-tab",
        "reflect": false,
        "defaultValue": "false"
      },
      "minTabWidth": {
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
          "text": "The minimum width for tabs"
        },
        "attribute": "min-tab-width",
        "reflect": true,
        "defaultValue": "'104px'"
      }
    };
  }
  static get states() {
    return {
      "tabCount": {},
      "panelCount": {},
      "intersectionMap": {},
      "tabsToTheLeft": {},
      "tabsToTheRight": {},
      "activeTabSide": {},
      "focused": {}
    };
  }
  static get events() {
    return [{
        "method": "orionTabSelected",
        "name": "orionTabSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits event when a tab header is clicked"
        },
        "complexType": {
          "original": "TabSelectionEvent",
          "resolved": "{ tabIndex: number; }",
          "references": {
            "TabSelectionEvent": {
              "location": "local"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "activeTab",
        "methodName": "onActiveTabChange"
      }, {
        "propName": "intersectionMap",
        "methodName": "computeOffscreenButtonCounts"
      }];
  }
}
