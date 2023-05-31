import { h } from '@stencil/core';
import { generateUUID } from '../../utils/utils';
/**
 * @slot orion-accordion-header - slot for accordion header content
 * @slot orion-accorion-panel - slot for accordion panel content
 */
export class OrionAccordion {
  constructor() {
    this.btnUid = '';
    this.sectionUid = '';
    this.open = false;
    this.chevronLeft = false;
    this.hasContainer = false;
  }
  toggleComponent() {
    this.open = !this.open;
    this.toggle.emit({ visible: this.open });
  }
  componentWillLoad() {
    if (this.open) {
      this.toggle.emit({ visible: this.open });
    }
    this.btnUid = generateUUID();
    this.sectionUid = `sect-${this.btnUid}`;
  }
  render() {
    return (h("div", { class: `orion-accordion__container ${this.hasContainer ? 'orion-accordion__container--visible' : ''}` }, h("button", { type: "button", class: `orion-accordion__header ${this.chevronLeft ? 'chevron-left' : ''}`, "aria-expanded": this.open ? 'true' : 'false', "aria-controls": this.sectionUid, id: this.btnUid, onClick: () => this.toggleComponent() }, h("span", { class: "orion-accordion__header__title" }, h("slot", { name: "orion-accordion-header" })), this.open ? (h("span", { class: "orion-accordion__icon" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M21.7250876,17.6196441 C22.2464651,18.1277218 23.0906844,18.1266464 23.6107041,17.6172421 C24.1307239,17.1078378 24.1296232,16.2830056 23.6082457,15.7749279 L12.941579,5.38035589 C12.4211626,4.8732147 11.5788374,4.8732147 11.058421,5.38035589 L0.391754315,15.7749279 C-0.129623174,16.2830056 -0.130723851,17.1078378 0.389295885,17.6172421 C0.90931562,18.1266464 1.75353487,18.1277218 2.27491236,17.6196441 L12,8.14263249 L21.7250876,17.6196441 Z", id: "path-1" })))) : (h("span", { class: "orion-accordion__icon" }, h("svg", { viewBox: "0 0 24 24" }, h("path", { d: "M2.27491236,5.8803559 C1.75353487,5.37227816 0.90931562,5.37335356 0.389295885,5.88275787 C-0.130723851,6.39216218 -0.129623174,7.21699435 0.391754315,7.72507209 L11.058421,18.1196441 C11.5788374,18.6267853 12.4211626,18.6267853 12.941579,18.1196441 L23.6082457,7.72507209 C24.1296232,7.21699435 24.1307239,6.39216218 23.6107041,5.88275787 C23.0906844,5.37335356 22.2464651,5.37227816 21.7250876,5.8803559 L12,15.3573675 L2.27491236,5.8803559 Z", id: "path-1" }))))), h("div", { class: `orion-accordion__panel ${this.open ? 'orion-accordion__panel--open' : 'orion-accordion__panel--closed'}`, id: this.sectionUid, "aria-labelledby": this.btnUid, "aria-hidden": this.open ? 'false' : 'true', role: "region" }, h("slot", { name: "orion-accordion-panel" }))));
  }
  static get is() { return "orion-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-accordion.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-accordion.css"]
    };
  }
  static get properties() {
    return {
      "open": {
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
          "text": "Accordion is closed by default"
        },
        "attribute": "open",
        "reflect": false,
        "defaultValue": "false"
      },
      "chevronLeft": {
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
          "text": "Chevrons are on the right by default"
        },
        "attribute": "chevron-left",
        "reflect": false,
        "defaultValue": "false"
      },
      "hasContainer": {
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
          "text": "Accordion container border"
        },
        "attribute": "has-container",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "toggle",
        "name": "toggle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the accordion is toggled"
        },
        "complexType": {
          "original": "OrionAccordionToggleEventData",
          "resolved": "OrionAccordionToggleEventData",
          "references": {
            "OrionAccordionToggleEventData": {
              "location": "local"
            }
          }
        }
      }];
  }
}
