// ./routes/invenRoute.js

const express = require("express");
const {InvenSave, InvenShow} = require("../controllers/invenController");
const router = express.Router();

// 재고 저장 
router
.route("/save")
    .post(InvenSave);


// 재고 보여주기
router
.route("/show")
    .get(InvenShow);

module.exports = router;