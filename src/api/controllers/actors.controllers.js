const Actor = require("../models/actor.model");

const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    return res.status(200).json(actors);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getActorById = async (req, res) => {
  const { id } = req.params;
  try {
    const actor = await Actor.findById(id);
    if (!actor || actor.length === 0) {
      return res.status(404).json("No actor found by this id");
    }
    return res.status(200).json(actor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createActor = async (req, res) => {
  try {
    const newActor = new Actor(req.body);
    const createdActor = await newActor.save();
    return res.status(201).json(createdActor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateActor = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedActor = await Actor.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedActor || updatedActor.length === 0) {
      return res.status(404).json("No actor found by this id");
    }
    return res.status(200).json(updatedActor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteActor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedActor = await Actor.findByIdAndDelete(id);
    if (!deletedActor || deletedActor.length === 0) {
      return res.status(404).json("No actor found by this id");
    }
    return res.status(200).json("Actor deleted successfully");
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllActors,
  getActorById,
  createActor,
  updateActor,
  deleteActor,
};
