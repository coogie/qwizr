import { h, Component, State } from "@stencil/core";

import { getAllItems } from "../../db/helpers";

@Component({
  tag: "page-config-questions",
  styleUrl: "page-config-questions.scss",
  shadow: true
})
export class PageConfigQuestions {
  @State() questions;
  @State() loading: boolean = true;

  componentWillLoad() {
    getAllItems({ table: "questions", sortKey: "timestamp" }).then(res => {
      this.questions = res;
      this.loading = false;
    });
  }

  render() {
    if (this.loading) return <div>Loading...</div>;

    return (
      <div class="page-config-questions">
        <h1>Config Questions</h1>
        <ul>
          {this.questions.map(question => {
            return (
              <li>
                <article>
                  <h1>
                    {question.title}{" "}
                    <small>{new Date(question.timestamp).toDateString()}</small>
                  </h1>
                  {question.body && <p>{question.body}</p>}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
