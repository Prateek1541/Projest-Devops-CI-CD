import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({
    status: "running",
    service: "Snake Game CI/CD App"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});