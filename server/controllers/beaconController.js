const Beacon = require("../models/beacon");

const getBeacons = async (req, res) => {
  try {
    const beacons = await Beacon.findAll();
    res.json(beacons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addBeacon = async (req, res) => {
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
    res.status(201).json(beacon);
  } catch (err) {
    res.status(500).json({ err: message });
  }
};

const updateBeacon = async (req, res) => {
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
      return res.status(404).json({ error: "Beacon not found" });
    }

    beacon.beacon_uuid = beacon_uuid;
    beacon.major = major;
    beacon.minor = minor;
    beacon.rssi_threshold = rssi_threshold;
    beacon.latitude = latitude;
    beacon.longitude = longitude;
    beacon.loc_description = loc_description;
    beacon.platform_no = platform_no;
    beacon.car_no = car_no;
    beacon.beacon_type = beacon_type;
    beacon.is_verified = is_verified;

    await beacon.save();
    res.json(beacon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBeacon = async (req, res) => {
  try {
    const { beacon_id } = req.params;
    const beacon = await Beacon.findByPk(beacon_id);

    if (!beacon) {
      return res.status(404).json({ error: "Beacon not found" });
    }

    await beacon.destroy();
    res.json({ message: "Beacon deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getBeacons, addBeacon, updateBeacon, deleteBeacon };
