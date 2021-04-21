// A simple model for a Post created for MongoDB using Mongoose.

const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: [
    {
      // References to another Schema object, in this case, the Users
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

module.exports = model("Post", postSchema);
