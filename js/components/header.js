import { loadComponent } from "../utils/componentLoader.js";

class AppHeader extends HTMLElement {
  async connectedCallback() {
    await loadComponent(this, "components/header.html");
  }
}
customElements.define("app-header", AppHeader);
