import { h, Component } from "@stencil/core";

@Component({
  tag: "boiler-plate",
  styleUrl: "boiler-plate.scss",
  shadow: true
})
export class BoilerPlate {
  render() {
    return <div class="boiler-plate" />;
  }
}
