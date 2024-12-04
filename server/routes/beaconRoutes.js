import express from "express";
import {
  getBeacons,
  addBeacon,
  updateBeacon,
  deleteBeacon,
} from "../controllers/beaconController.js";

const router = express.Router();

router.get("/api/beacons", getBeacons);
router.post("/api/beacons", addBeacon);
router.put("/api/beacons/:beacon_id", updateBeacon);
router.delete("/api/beacons/:beacon_id", deleteBeacon);

export default router;
