const express = require("express");

const {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
} = require("../controllers/actors.controllers");

const router = express.Router();

router.get("/", getAllActors);
router.get("/id/:id", getActorById);
router.post("/", createActor);
router.put("/:id", updateActor);
router.delete("/:id", deleteActor);

module.exports = router;
