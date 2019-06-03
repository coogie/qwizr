import { uuidv4 } from "../../global/uuid";

export class Answer {
  id: string;
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
