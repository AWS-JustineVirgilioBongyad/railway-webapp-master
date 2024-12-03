import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Beacon = sequelize.define(
  "Beacon",
  {
    beacon_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    beacon_uuid: { type: DataTypes.STRING, allowNull: false },
    major: { type: DataTypes.STRING, allowNull: false },
    minor: { type: DataTypes.STRING, allowNull: false },
    rssi_threshold: { type: DataTypes.INTEGER, allowNull: false },
    latitude: { type: DataTypes.FLOAT, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: false },
    loc_description: { type: DataTypes.STRING, allowNull: false },
    platform_no: { type: DataTypes.INTEGER, allowNull: true },
    car_no: { type: DataTypes.INTEGER, allowNull: true },
    beacon_type: { type: DataTypes.STRING, allowNull: false },
    is_verified: { type: DataTypes.BOOLEAN, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: true },
    updated_at: { type: DataTypes.DATE, allowNull: true },
  },
  { tableName: "beacon", timestamps: false }
);

export default Beacon;
