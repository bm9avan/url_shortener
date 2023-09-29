const express = require("express");
const handelShortId = require("../controllers/handelShortId");
const handelIDalt = require("../controllers/handelIDalt");

const router = express.Router();

router.get("/:id", handelShortId);
router.get("/:id/alt", handelIDalt);

module.exports = router;
