// ./routes/posRoute.js

const express = require("express");
const {PosMenu} = require("../controllers/posController");
const router = express.Router();

// 포스기 메뉴판
router
.route("/menu")
    .get(PosMenu);

module.exports = router;