const URL = require("../models/url");
const IP = require("ip");

async function handelShortId(req, res) {
  const id = req.params.id;
  if (id === "favicon.ico") {
    return;
  }
  const reURL = await URL.findOneAndUpdate(
    { uniqueId: id },
    { $push: { vistHistory: { time: Date.now(), ip: IP.address() } } }
  );
  return res.redirect(reURL.rediredctURL);
}

module.exports = handelShortId;
