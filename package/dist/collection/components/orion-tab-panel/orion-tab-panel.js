import { Host, h } from '@stencil/core';
export class OrionTabPanel {
  constructor() {
    this.getPanelClasses = () => {
      return `
      orion-tab-panel
      orion-tab-panel--${this.isActive ? 'active' : 'inactive'}
    `;
    };
    this.panelIndex = -1;
    this.for = '';
    this.isActive = false;
  }
  tabSelected(e) {
    const { target, detail } = e;
    if (target.id === this.for) {
      if (detail) {
        const { tabIndex } = detail;
        this.isActive = tabIndex === this.panelIndex;
      }
    }
  }
  render() {
    return (h(Host, null, h("div", { class: this.getPanelClasses(), role: "tabpanel", "aria-labelledby": `${this.for}-tab-${this.panelIndex}` }, h("slot", null))));
  }
  static get is() { return "orion-tab-panel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-tab-panel.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-tab-panel.css"]
    };
  }
  static get properties() {
    return {
      "panelIndex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Index of tab that controls if this panel is active. Set by a parent orion-tabs component."
        },
        "attribute": "panel-index",
        "reflect": false,
        "defaultValue": "-1"
      },
      "for": {
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
          "text": "Specifies which orion-tabs element this panel is bound to. Set by a parent orion-tabs component."
        },
        "attribute": "for",
        "reflect": false,
        "defaultValue": "''"
      },
      "isActive": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Marks the panel as active or not"
        },
        "attribute": "is-active",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get listeners() {
    return [{
        "name": "orionTabSelected",
        "method": "tabSelected",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
