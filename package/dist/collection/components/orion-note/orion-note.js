import { h } from '@stencil/core';
/**
 * @slot default - default slot for note content
 */
export class OrionNote {
  render() {
    return (h("div", { class: "orion-note" }, h("slot", null)));
  }
  static get is() { return "orion-note"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["orion-note.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["orion-note.css"]
    };
  }
}
