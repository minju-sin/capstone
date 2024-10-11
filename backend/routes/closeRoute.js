// ./routes/closeRoute.js

const express = require("express");
const {CloseTotalPrice, CloseTotalCashPrice, CloseTotalCardPrice} = require("../controllers/closeController");
const router = express.Router();

// 총 매출액 
router
.route("/totalPrice")
    .get(CloseTotalPrice);

// 현금 
router
.route("/totalCashPrice")
    .get(CloseTotalCashPrice);

// 신용카드
router
.route("/totalCardPrice")
    .get(CloseTotalCardPrice);

module.exports = router;