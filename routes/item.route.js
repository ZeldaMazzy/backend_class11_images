const express = require("express");
const router = express.Router();

const { upload, createItem, getItems } = require("../controllers/item.controller");

router.route("/").post(createItem);
router.route("/").get(getItems);
router.route("/upload").post(upload)

module.exports = router;