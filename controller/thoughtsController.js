const { User, Thought } = require("../models/index");

const routerWorks = (req, res) => res.json({ message: "It works" });

async function allThoughts(req, res) {
  try {
    const thoughtData = await Thought.find();
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function oneThought(req, res) {
  try {
    const thoughtData = await Thought.findById(req.params._id);
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function newThought(req, res) {
  try {
    const newThought = await Thought.create(req.body);
    await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: newThought._id } },
      { new: true }
    );
    res.status(200).json({ newThought });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateThought(req, res) {
  try {
    const thoughtData = await Thought.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    );
    res.status(200).json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
}
//!it wont remove it from the array of Thoughts in User
async function deleteThought(req, res) {
  try {
    const thoughtData = await Thought.findById(req.params._id);
    await Thought.findByIdAndRemove(req.params._id);
    const updatedUser = await User.findOneAndUpdate(
      { username: thoughtData.username },
      { $pull: { thoughts: req.params._id } },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Thought successfully DELETED", updatedUser });
  } catch (err) {
    res.status(500).json(err);
  }
}
module.exports = {
  routerWorks,
  allThoughts,
  oneThought,
  newThought,
  updateThought,
  deleteThought,
};
