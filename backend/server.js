require("dotenv").config();
const express = require("express");
const path = require("path");
const graph = require("./graph/graph");

const app = express();
app.use(express.json());


// API
app.post("/chat", async (req, res) => {
  console.log("chat request received", req.body);
  const result = await graph.invoke({
    input: req.body.message
  });

  res.json({ response: result.response });
});

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, () => {
  console.log("🚀 Running at http://localhost:3000");
});