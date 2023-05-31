import { h } from '@stencil/core';
import { createPopper } from '@popperjs/core';
import { generateUUID } from '../../utils/utils';
/**
 * @slot default - default slot for the popover trigger
 * @slot orion-popover-title - slot for popover title
 * @slot orion-popover-body - slot for body content
 */
export class OrionPopover {
  constructor() {
    this.uid = '';
    this.isOpen = false;
    this.popperPadding = 24; // pixel distance from the edge of browser where popper would change position
    this.hasTitleSlot = false;
    this.hasBodySlot = false;
    // used for resize event in _handleWidth()
    this.originalWidth = this.popperWidth;
    this.mouseDownFlag = false;
    this.popperWidth = 300;
    this.placement = 'bottom';
  }
  handleResize() {
    this._handleWidth();
  }
  closeWhenFocused(e) {
    const target = e.target;
    if (!this.el.contains(target) && this.popover.hasAttribute('data-show')) {
      this._handleClose();
    }
  }
  componentWillLoad() {
    this.uid = generateUUID();
    this._handleWidth();
    this.hasTitleSlot = !!this.el.querySelector('[slot="orion-popover-title"]');
    this.hasBodySlot = !!this.el.querySelector('[slot="orion-popover-body"]');
  }
  componentDidLoad() {
    // This component uses popperJS
    // Please refer to the documentation on https://popper.js.org/
    // for any updates to the below options
    // handle position if it is outside the viewport
    this.popperInstance = createPopper(this.trigger, this.popover, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 5],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: this.popperPadding,
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['right', 'left', 'bottom', 'top'],
            padding: this.popperPadding,
          },
        },
        {
          name: 'arrow',
          options: {
            padding: 4, // at least 4px from the edges of the popper
          },
        },
      ],
    });
  }
  _hidePopover() {
    if (this.popover != null && !this.mouseDownFlag) {
      if (this.popover.hasAttribute('data-show')) {
        this.popover.removeAttribute('data-show');
        this.popover.setAttribute('aria-hidden', 'true');
        this.trigger.setAttribute('aria-expanded', 'false');
        this.isOpen = false;
        this.mouseDownFlag = false;
      }
    }
  }
  _showPopover() {
    if (!this.isOpen) {
      this.popover.setAttribute('data-show', '');
      this.popover.setAttribute('aria-hidden', 'false');
      this.trigger.setAttribute('aria-expanded', 'true');
      this.isOpen = true;
      // We need to tell Popper to update the popover position
      // after we show the popover, otherwise it will be incorrect
      this.popperInstance.update();
    }
  }
  _handleWidth() {
    const screenWidth = document.body.clientWidth - this.popperPadding * 2;
    // handle width if tooltip is wider than viewport
    if (this.originalWidth >= screenWidth) {
      this.popperWidth = screenWidth;
    }
  }
  _setClickFlag() {
    // used as conditional in _hidePopover() so popper won't close if user clicks in it
    this.mouseDownFlag = true;
  }
  _handleClose() {
    this.mouseDownFlag = false;
    this._hidePopover();
  }
  _onKeyDown(event) {
    if (event.key === 'Escape') {
      this.mouseDownFlag = false;
      this._hidePopover();
    }
  }
  _triggerClick(e) {
    if (this.isOpen) {
      this.mouseDownFlag = false;
      this._hidePopover();
    }
    else {
      // force the trigger to focus so the Escape keyDown event works on the element
      this.trigger.focus();
      this._showPopover();
    }
    // prevent popover from showing again on focus
    e.preventDefault();
  }
  // this function is called when ANY focuasable element inside the popper is about to lose focus
  _onFocusOut() {
    // if the component does not have a focused element inside it, then hide popper
    if (!this.wrapper.matches(':focus-within')) {
      // remove focus from trigger if user clicks outside of the browser/console log etc.
      this.trigger.blur();
      this._hidePopover();
    }
  }
  render() {
    const inlineCSS = {
      width: `${this.popperWidth}px`,
    };
    return (
    // TODO: address the eslint accessbility error below
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    h("div", { class: "orion-popover__wrapper", ref: el => {
        this.wrapper = el;
      }, onFocusout: this._onFocusOut.bind(this), onKeyDown: this._onKeyDown.bind(this) }, h("div", { ref: el => {
        this.trigger = el;
      }, class: "orion-popover__trigger", "aria-describedby": this.uid, "aria-expanded": "false", role: "button", tabIndex: 0, onMouseDown: this._triggerClick.bind(this), onFocus: this._showPopover.bind(this) }, h("slot", null)), h("div", { class: "orion-popover__content", ref: el => {
        this.popover = el;
      }, "aria-hidden": "true", role: "region", style: inlineCSS, onMouseDown: this._setClickFlag.bind(this) }, h("div", { class: "arrow", "data-popper-arrow": true }), this.hasTitleSlot ? (h("div", { class: "orion-popover__title" }, h("slot", { name: "orion-popover-title" }), h("button", { type: "button", class: "orion-popover__close-icon", "aria-label": "Close", onClick: this._handleClose.bind(this) }, h("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24" }, h("path", { d: "M12,10.3837559 L22.0490208,0.334735107 C22.4953343,-0.111578369 23.2189514,-0.111578369 23.6652649,0.334735107 C24.1115784,0.781048584 24.1115784,1.5046657 23.6652649,1.95097918 L13.6162441,12 L23.6652649,22.0490208 C24.1115784,22.4953343 24.1115784,23.2189514 23.6652649,23.6652649 C23.2189514,24.1115784 22.4953343,24.1115784 22.0490208,23.6652649 L12,13.6162441 L1.95097918,23.6652649 C1.5046657,24.1115784 0.781048584,24.1115784 0.334735107,23.6652649 C-0.111578369,23.2189514 -0.111578369,22.4953343 0.334735107,22.0490208 L10.3837559,12 L0.334735107,1.95097918 C-0.111578369,1.5046657 -0.111578369,0.781048584 0.334735107,0.334735107 C0.781048584,-0.111578369 1.5046657,-0.111578369 1.95097918,0.334735107 L12,10.3837559 Z", id: "path-1" }))))) : (''), h("div", { id: this.uid, class: "orion-popover__body" }, h("slot", { name: "orion-popover-body" })))));
  }
  static get is() { return "orion-popover"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-popover.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-popover.css"]
    };
  }
  static get properties() {
    return {
      "popperWidth": {
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
          "text": "width should be between 100px and 640px"
        },
        "attribute": "popper-width",
        "reflect": true,
        "defaultValue": "300"
      },
      "placement": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
          "resolved": "\"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The placement of the popper relative to its trigger"
        },
        "attribute": "placement",
        "reflect": true,
        "defaultValue": "'bottom'"
      }
    };
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
        "name": "click",
        "method": "closeWhenFocused",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
