import Database from "better-sqlite3";

const db = new Database("trip.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS saved_destinations (
    id TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    type TEXT NOT NULL,
    name TEXT NOT NULL,
    data TEXT NOT NULL,
    PRIMARY KEY (id, user_id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

export default db;