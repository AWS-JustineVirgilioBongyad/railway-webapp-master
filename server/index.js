import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import beaconRoutes from "./routes/beaconRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/beacons", beaconRoutes);

// Export for Nuxt middleware
export default app;