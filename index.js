import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "CI/CD Demo API",
    uptime: process.uptime(),
  });
});

// App info endpoint
app.get("/info", (req, res) => {
  res.json({
    project: "DevOps CI/CD Pipeline Project",
    author: "Prateek Tripathi",
    version: process.env.APP_VERSION || "1.0.0",
  });
});

// Simple API example
app.get("/api/message", (req, res) => {
  res.json({
    message: "CI/CD pipeline deployed successfully 🚀",
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the DevOps CI/CD Demo API",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});