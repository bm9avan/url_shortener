const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function handelURL(req, res) {
  if (!req.body.url) {
    return res.status(400).json({ error: "Please enter url" });
  }
  const uniqueId = nanoid(6);
  try {
    await URL.create({
      uniqueId,
      rediredctURL: req.body.url,
      vistHistory: [],
    });
  } catch (err) {
    return res.json({ err: err.message });
  }
  return res.json({ uniqueId });
}

module.exports = handelURL;
