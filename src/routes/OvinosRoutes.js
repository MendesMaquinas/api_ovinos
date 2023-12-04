const express = require("express");
const router = express.Router();

const controller = require("../controllers/ovinos.controllers");

router.get("/", controller.findAll);
router.get("/:id", controller.findByPk);
router.post("/", controller.create);
router.put("/", controller.update);
router.delete("/:id", controller.deleta);

module.exports = router;
