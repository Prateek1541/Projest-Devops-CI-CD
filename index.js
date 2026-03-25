import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.use(express.static("public"));

let secretNumber = Math.floor(Math.random() * 100) + 1;

app.post("/guess", (req, res) => {
  const { guess } = req.body;

  if (guess == secretNumber) {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    return res.json({ result: "correct" });
  }

  if (guess < secretNumber) {
    return res.json({ result: "higher" });
  }

  return res.json({ result: "lower" });
});

app.get("/health", (req, res) => {
  res.json({ status: "running", service: "CI/CD Demo API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});