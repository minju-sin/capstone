// ./routes/orderRoute.js

const express = require("express");
const {orderSave, orderShow, orderReceipt} = require("../controllers/orderController");
const router = express.Router();

//  주문표 저장 
router
.route("/save")
    .post(orderSave);

// 영수증 조회 
router
.route("/show")
    .get(orderShow);

// 영수증 상세 조회
router
.route("/receipt")
    .get(orderReceipt);

module.exports = router;