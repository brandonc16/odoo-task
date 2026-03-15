import { loadComponent } from "../utils/componentLoader.js";

class AppFooter extends HTMLElement {
  async connectedCallback() {
    await loadComponent(this, "components/footer.html");
  }
}

customElements.define("app-footer", AppFooter);
