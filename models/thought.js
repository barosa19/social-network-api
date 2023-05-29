const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
//TODO: getter function and understanding virtuals
const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, deafult: Date.now, get: (d) => d.toDateString() },
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
