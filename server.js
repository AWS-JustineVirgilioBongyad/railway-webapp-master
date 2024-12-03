import express from "express";
import cors from "cors";
import sequelize from "./server/config/db.js";
const beaconRoutes = require("./server/routes/beaconRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/beacons", beaconRoutes);

const PORT = 3001;
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("Unable to connect to the database", err));
