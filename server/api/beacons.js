import express from "express";
import {
  getBeacons,
  addBeacon,
  updateBeacon,
  deleteBeacon,
} from "../controllers/beaconController.js";

const router = express.Router();

// Define routes
router.get("/", getBeacons);
router.post("/", addBeacon);
router.put("/:beacon_id", updateBeacon);
router.delete("/:beacon_id", deleteBeacon);

export default router;
