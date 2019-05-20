import { h, Component } from "@stencil/core";

@Component({
  tag: "app-header",
  styleUrl: "app-header.scss",
  shadow: true
})
export class AppHeader {
  render() {
    return (
      <header class="app-header">
        <h1>Stencil App Starter</h1>
      </header>
    );
  }
}
