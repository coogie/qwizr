import { h, Component, Listen, State } from "@stencil/core";
import classNames from "classnames";

@Component({
  tag: "app-menu",
  styleUrl: "app-menu.scss",
  shadow: true
})
export class AppMenu {
  @State() isVisible: boolean = false;

  @Listen("toggleMenu")
  toggleMenu() {
    this.isVisible = !this.isVisible;
  }

  render() {
    const classes = classNames("app-menu", {
      hidden: !this.isVisible
    });

    return (
      <div class={classes}>
        <button onClick={() => this.toggleMenu()}>Hide</button>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
          <li>Item 10</li>
        </ul>
      </div>
    );
  }
}
