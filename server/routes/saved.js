import { Router } from "express";
import db from "../db.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.use(requireAuth);

router.get("/", (req, res) => {
  const rows = db
    .prepare("SELECT id, type, name, data FROM saved_destinations WHERE user_id = ?")
    .all(req.userId);

  const items = rows.map((row) => ({ ...JSON.parse(row.data) }));
  res.json(items);
});

router.post("/", (req, res) => {
  const item = req.body;

  if (!item || !item.id || !item.name) {
    return res.status(400).json({ error: "Invalid item." });
  }

  const existing = db
    .prepare("SELECT id FROM saved_destinations WHERE user_id = ? AND name = ?")
    .get(req.userId, item.name);

  if (existing) {
    return res.status(409).json({ error: "Already saved." });
  }

  db.prepare(
    "INSERT INTO saved_destinations (id, user_id, type, name, data) VALUES (?, ?, ?, ?, ?)"
  ).run(item.id, req.userId, item.type, item.name, JSON.stringify(item));

  res.status(201).json(item);
});

router.delete("/:id", (req, res) => {
  db.prepare("DELETE FROM saved_destinations WHERE id = ? AND user_id = ?").run(
    req.params.id,
    req.userId
  );
  res.status(204).end();
});

export default router;