import { h, Component, State } from "@stencil/core";

import { getAllItems } from "../../db/helpers";

@Component({
  tag: "page-config-answers",
  styleUrl: "page-config-answers.scss",
  shadow: true
})
export class PageConfigAnswers {
  @State() answers;
  @State() loading: boolean = true;

  componentWillLoad() {
    getAllItems({ table: "answers", sortKey: "timestamp" }).then(res => {
      this.answers = res;
      this.loading = false;
    });
  }

  render() {
    if (this.loading) return <div>Loading...</div>;

    return (
      <div class="page-config-answers">
        <h1>Config Answers</h1>
        <ul>
          {this.answers.map(answer => {
            return (
              <li>
                <article>
                  <h1>
                    {answer.title}{" "}
                    <small>{new Date(answer.timestamp).toDateString()}</small>
                  </h1>
                  {answer.body && <p>{answer.body}</p>}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
