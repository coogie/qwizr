import { h, Component } from "@stencil/core";

@Component({
  tag: "page-config",
  styleUrl: "page-config.scss",
  shadow: true
})
export class PageConfig {
  render() {
    return (
      <div class="page-config">
        <h1>Config</h1>
        <ul>
          <li>Edit questions</li>
          <li>Edit answers</li>
        </ul>
      </div>
    );
  }
}
