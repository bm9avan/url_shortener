const express = require("express");
const handelURL = require("../controllers/handelURL");
const handelShortId = require("../controllers/handelShortId");

const router = express.Router();

router.post("/", handelURL);
router.get("/:id", handelShortId);

module.exports = router;
