import express from "express";
import beaconsRoutes from "./api/beacons.js";

const app = express();

// Middleware
app.use(express.json());
app.use("/api/beacons", beaconsRoutes);

// Routes
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
