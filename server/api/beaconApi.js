import Beacon from "~/server/models/beacon.js";

export default defineEventHandler(async (event) => {
  if (event.node.req.method === "POST") {
    const body = await readBody(event);
    try {
      const newBeacon = await Beacon.create(body);
      return { success: true, data: newBeacon };
    } catch (err) {
      console.error("Error adding beacon:", err);
      throw createError({
        statusCode: 500,
        statusMessage: "Error adding beacon",
      });
    }

    // throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' });
  }
});
