// ./routes/invenRoute.js

const express = require("express");
const {InvenSave} = require("../controllers/invenController");
const router = express.Router();

// 재고 저장 
router
.route("/save")
    .post(InvenSave);

module.exports = router;