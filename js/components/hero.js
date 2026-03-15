import { loadComponent } from "../utils/componentLoader.js";

class AppHero extends HTMLElement {
  async connectedCallback() {
    await loadComponent(this, "components/hero.html");
  }
}

customElements.define("app-hero", AppHero);
