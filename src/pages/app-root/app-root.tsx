import { h, Component } from "@stencil/core";

import "@stencil/router";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <app-header />

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/config" component="page-config" exact />
              <stencil-route
                url="/config/questions"
                component="page-config-questions"
                exact
              />
              <stencil-route
                url="/config/answers"
                component="page-config-answers"
                exact
              />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
