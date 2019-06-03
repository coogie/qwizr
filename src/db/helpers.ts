import { db } from ".";

export function getAllItems({ table, sortKey = "id" }) {
  return db[table]
    .orderBy(sortKey)
    .reverse()
    .toArray();
}
