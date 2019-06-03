import { uuidv4 } from "../../global/uuid";

export class Question {
  id: string;
  answerId?: string;
  title: string;
  body?: string;
  timestamp: number;

  constructor(title: string, body: string) {
    this.id = uuidv4();
    this.title = title;
    this.body = body;
    this.timestamp = Date.now();
  }
}
