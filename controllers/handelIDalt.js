const URL = require("../models/url");

async function handelIDalt(req, res) {
  const id = req.params.id;
  const obj = await URL.findOne({ uniqueId: id });
  return res.json({
    rediredctURL: obj.rediredctURL,
    totalVisits: obj.vistHistory.length,
    vistHistory: obj.vistHistory,
  });
}

module.exports = handelIDalt;
