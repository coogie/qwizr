import Dexie from "dexie";

export const db = new Dexie("QwizrDB");

db.version(1).stores({
  questions: "id, title, body, timestamp",
  answers: "id, title, body, timestamp"
});
