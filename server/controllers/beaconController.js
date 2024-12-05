import Beacon from "../models/beacon.js";

export const getBeacons = async (req, res) => {
  console.log("GET /beacons called");
  try {
    const beacons = await Beacon.findAll();
    console.log;
    res.status(200).json({ success: true, data: beacons });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const addBeacon = async (req, res) => {
  try {
    const {
      beacon_uuid,
      major,
      minor,
      rssi_threshold,
      latitude,
      longitude,
      loc_description,
      platform_no,
      car_no,
      beacon_type,
      is_verified,
    } = req.body;

    // Basic validation
    if (!beacon_uuid || !major || !minor) {
      return res
        .status(400)
        .json({ success: false, error: "Required fields are missing" });
    }

    const beacon = await Beacon.create({
      beacon_uuid,
      major,
      minor,
      rssi_threshold,
      latitude,
      longitude,
      loc_description,
      platform_no,
      car_no,
      beacon_type,
      is_verified,
    });
    res.status(201).json({ success: true, data: beacon });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const updateBeacon = async (req, res) => {
  try {
    const { beacon_id } = req.params;
    const {
      beacon_uuid,
      major,
      minor,
      rssi_threshold,
      latitude,
      longitude,
      loc_description,
      platform_no,
      car_no,
      beacon_type,
      is_verified,
    } = req.body;

    const beacon = await Beacon.findByPk(beacon_id);

    if (!beacon) {
      return res
        .status(404)
        .json({ success: false, error: "Beacon not found" });
    }

    // Update fields
    Object.assign(beacon, {
      beacon_uuid,
      major,
      minor,
      rssi_threshold,
      latitude,
      longitude,
      loc_description,
      platform_no,
      car_no,
      beacon_type,
      is_verified,
    });

    await beacon.save();
    res.status(200).json({ success: true, data: beacon });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const deleteBeacon = async (req, res) => {
  try {
    const { beacon_id } = req.params;
    const beacon = await Beacon.findByPk(beacon_id);

    if (!beacon) {
      return res
        .status(404)
        .json({ success: false, error: "Beacon not found" });
    }

    await beacon.destroy();
    res
      .status(200)
      .json({ success: true, message: "Beacon deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
