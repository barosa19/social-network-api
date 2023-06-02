const router = require("express").Router();
const {
  routerWorks,
  allThoughts,
  oneThought,
  newThought,
  updateThought,
  deleteThought,
  newReaction,
  deleteReaction,
} = require("../../controller/thoughtsController");

router.route("/").get(allThoughts).post(newThought);

router.route("/:_id").get(oneThought).put(updateThought).delete(deleteThought);

router.route("/:thoughtId/reactions").post(newReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
