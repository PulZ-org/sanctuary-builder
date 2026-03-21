import express from "express";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());

const dataDir = path.resolve("server", "data");
fs.mkdirSync(dataDir, { recursive: true });

const dbPath = path.join(dataDir, "waitlist.json");

const readDb = () => {
  try {
    const raw = fs.readFileSync(dbPath, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data?.emails) ? data : { emails: [] };
  } catch {
    return { emails: [] };
  }
};

const writeDb = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/waitlist", (req, res) => {
  try {
    console.log("here")
  const email = String(req.body?.email || "").trim().toLowerCase();
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email." });
  }

  const db = readDb();
  const exists = db.emails.some((item) => item.email === email);
  if (exists) {
    return res.json({ status: "already" });
  }
  db.emails.push({ email, created_at: new Date().toISOString() });
  writeDb(db);
  return res.json({ status: "ok" });
}
catch (e) {
  console.log(e)
}
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Waitlist API listening on http://localhost:${port}`);
});
