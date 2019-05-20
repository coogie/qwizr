import { h, Component, State } from "@stencil/core";

import "../app-menu/app-menu";

@Component({
  tag: "app-header",
  styleUrl: "app-header.scss",
  shadow: true
})
export class AppHeader {
  @State() menu: HTMLElement;

  componentWillLoad() {
    this.menu = document.createElement("app-menu");
    document.body.appendChild(this.menu);
  }

  toggleVisibility() {
    const toggle = new Event("toggleMenu");
    this.menu.dispatchEvent(toggle);
  }

  render() {
    return (
      <header class="app-header">
        <h1>Stencil App Starter</h1>

        <button onClick={() => this.toggleVisibility()}>Config</button>
      </header>
    );
  }
}
