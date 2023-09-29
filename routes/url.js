const express = require("express");
const handelURL = require("../controllers/handelURL");

const router = express.Router();

router.post("/", handelURL);

module.exports = router;
