const express = require("express");
const router = express.Router();

router.get("/", mainController.home);
module.exports = router;
