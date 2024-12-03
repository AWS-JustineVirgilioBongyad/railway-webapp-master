import express from "express";
const app = express();
const PORT = 4000;

app.get("/beacon", (req, res) => {
  res.json({ message: "Moyai Webapp" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}"`);
});
