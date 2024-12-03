const express = require("express");
import {
  getBeacons,
  addBeacon,
  updateBeacon,
  deleteBeacon,
} from "../controllers/beaconController.js";

const router = express.Router();

router.get("/", getBeacons);
router.post("/", addBeacon);
router.put("/:beacon_id", updateBeacon);
router.delete("/:beacon_id", deleteBeacon);

module.exports = router;
