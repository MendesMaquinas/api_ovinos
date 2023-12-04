const express = require("express");
const router = express.Router();

const repository = require("../repositories/ovino.repository");

router.get("/", repository.getAll);

router.get("/:id", repository.findByPk);

router.post("/", repository.create);

router.put("/", repository.update);

router.delete("/:id", repository.deleta);

module.exports = router;
