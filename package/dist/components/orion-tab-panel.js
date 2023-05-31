import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const orionTabPanelCss = ":host{display:block;--orion-tab-panel-active-display:block;--orion-tab-panel-inactive-display:none}.orion-tab-panel--active{display:var(--orion-tab-panel-active-display)}.orion-tab-panel--inactive{display:var(--orion-tab-panel-inactive-display)}";

const OrionTabPanel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  static get style() { return orionTabPanelCss; }
}, [1, "orion-tab-panel", {
    "panelIndex": [2, "panel-index"],
    "for": [1],
    "isActive": [1540, "is-active"]
  }, [[8, "orionTabSelected", "tabSelected"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-tab-panel"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-tab-panel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionTabPanel$1);
      }
      break;
  } });
}

const OrionTabPanel = OrionTabPanel$1;
const defineCustomElement = defineCustomElement$1;

export { OrionTabPanel, defineCustomElement };
