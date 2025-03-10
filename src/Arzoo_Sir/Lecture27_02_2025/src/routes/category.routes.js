const express = require("express");
const categoryController = require("../controllers/category.controller");
const router = express.Router();

router.get("/", categoryController.fetchAll);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);
router.get("/:id", categoryController.findOne);
module.exports = router;
