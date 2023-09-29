const URL = require("../models/url");

async function handelShortId(req, res) {
  const id = req.params.id;
  console.log("id", id);
  const reURL = await URL.findOne({ uniqueId: id }, { rediredctURL: 1 });
  console.log(reURL);
  return res.redirect(reURL.rediredctURL);
}

module.exports = handelShortId;
