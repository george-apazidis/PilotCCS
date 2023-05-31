import { Host, h } from '@stencil/core';
export class OrionTab {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "orion-tab"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-tab.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-tab.css"]
    };
  }
}
