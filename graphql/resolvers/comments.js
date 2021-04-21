const { AuthenticationError, UserInputError } = require("apollo-server");

const checkAuth = require("../../util/check-auth");
const Post = require("../../models/Post");

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      // Get user from context
      const { username } = checkAuth(context);
      // Simple Validation
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "Comment body must not empty",
          },
        });
      }

      // Adds the comment
      const post = await Post.findById(postId);
      if (post) {
        // .unshift adds the comment to the top
        post.comments.unshift({
          body,
          username,
          createdAt: new Date().toISOString(),
        });
        await post.save();

        return post;
      } else throw new UserInputError("Post not found");
    },
    async deleteComment(_, { postId, commentId }, context) {
      // Gets the username and post
      const { username } = checkAuth(context);
      const post = await Post.findById(postId);

      if (post) {
        // Finds the index of the comment to delete
        const commentIndex = post.comments.findIndex((c) => c.id === commentId);

        // Verifies the owner of the comment and delete it
        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();
          return post;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Post not found");
      }
    },
  },
};
