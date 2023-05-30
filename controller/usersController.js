const { User, Thought } = require("../models/index");

async function allUsers(req, res) {
  try {
    const userData = await User.find();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function oneUser(req, res) {
  try {
    const userData = await User.findById(req.params._id);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function newUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateUser(req, res) {
  try {
    const userData = await User.findByIdAndUpdate(
        req.params._id, 
        req.body, 
        { new: true }
    );
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    const userData = await User.findById(req.params._id);
    await User.findByIdAndRemove(req.params._id);
    await Thought.deleteMany({ username: userData.username });
    res
      .status(200)
      .json({ message: "User and associated thoughts successfully DELETED" });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function newFriend(req, res) {
  try {
    const newFriendData = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );
    res.status(200).json({ newFriendData });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteFriend(req, res) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    res.status(200).json({ updatedUser });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  allUsers,
  oneUser,
  newUser,
  updateUser,
  deleteUser,
  newFriend,
  deleteFriend
};
