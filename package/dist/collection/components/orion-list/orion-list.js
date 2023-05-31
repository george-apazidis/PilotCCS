import { h } from '@stencil/core';
export class OrionList {
  render() {
    return (h("ul", { class: "orion-list" }, h("slot", null)));
  }
  static get is() { return "orion-list"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-list.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-list.css"]
    };
  }
}
