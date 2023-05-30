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
    const updatedUser = await User.findOneAndUpdate(
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

async function deleteThought(req, res) {
  try {
    const thoughtData = await Thought.findById(req.params._id);
    await Thought.findByIdAndRemove(req.params._id);
    const updatedUser = await User.findOneAndUpdate(
      { username: thoughtData.username },
      { $pull: { thoughts: req.params._id } },
      { new: true }
    )
    res
      .status(200)
      .json({ message: "Thought successfully DELETED", updatedUser });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function newReaction(req, res) {
  try {
    const thoughtData = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      {$addToSet: {reactions: req.body}},
      {new: true},
      )
    
    res.status(200).json({ thoughtData });
  } catch (err) {
    res.status(500).json(err);
  }
}
//! How am i suppose to deleteReaction? With an id?
async function deleteReaction(req, res) {
  try {
    const thoughtData = await Thought.findById(req.params.thoughtId)
    thoughtData.reactions.push(req.body)
    res.status(200).json({ });
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
  newReaction,
  deleteReaction
};
