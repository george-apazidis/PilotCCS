import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const orionTabCss = ":host{display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}";

const OrionTab$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return orionTabCss; }
}, [1, "orion-tab"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["orion-tab"];
  components.forEach(tagName => { switch (tagName) {
    case "orion-tab":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OrionTab$1);
      }
      break;
  } });
}

const OrionTab = OrionTab$1;
const defineCustomElement = defineCustomElement$1;

export { OrionTab, defineCustomElement };
