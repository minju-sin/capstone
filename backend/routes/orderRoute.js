// ./routes/orderRoute.js

const express = require("express");
const {orderSave, orderShow} = require("../controllers/orderController");
const router = express.Router();

//  주문표 저장 
router
.route("/save")
    .post(orderSave);

// 영수증 조회 
router
.route("/show")
    .get(orderShow);

module.exports = router;