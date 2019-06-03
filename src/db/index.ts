import Dexie from "dexie";
import { Question } from "./model/question";
import { Answer } from "./model/answer";

export class QwizrDatabase extends Dexie {
  public questions: Dexie.Table<Question, number>;
  public answers: Dexie.Table<Answer, number>;

  constructor() {
    super("QwizrDatabase");

    this.version(1).stores({
      questions: "id, title, body, timestamp, answerId",
      answers: "id, title, body, timestamp"
    });

    this.questions.mapToClass(Question);
    this.answers.mapToClass(Answer);
  }
}

export const db = new QwizrDatabase();
