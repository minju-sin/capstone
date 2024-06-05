// ./routes/orderRoute.js

const express = require("express");
const {orderSave} = require("../controllers/orderController");
const router = express.Router();

//  주문표 저장 
router
.route("/save")
    .post(orderSave);

module.exports = router;