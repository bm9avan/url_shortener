const { customAlphabet } = require("nanoid");
const URL = require("../models/url");
// const nanoid  = require('nanoid');
async function handelURL(req, res) {
  if (!req.body.url) {
    return res.status(400).json({ error: "Please enter url" });
  }
  const nanoid = customAlphabet(req.body.url, 6);
  const uniqueId = nanoid();
  console.log(uniqueId);
  await URL.create({
    uniqueId,
    rediredctURL: req.body.url,
    vistHistory: [],
  });
  return res.end(uniqueId);
}
// function handelURL(req, res) {

// }
module.exports = handelURL;
