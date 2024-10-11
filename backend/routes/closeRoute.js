// ./routes/closeRoute.js

const express = require("express");
const {CloseTotalPrice} = require("../controllers/closeController");
const router = express.Router();

// 총 매출액 
router
.route("/totalPrice")
    .get(CloseTotalPrice);


module.exports = router;