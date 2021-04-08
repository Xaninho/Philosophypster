import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { IconButton, Badge } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

function LikeButton({ user, post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
  });

  const likeButton = user ? (
    liked ? (
      <FavoriteIcon color="primary" />
    ) : (
      <FavoriteIcon />
    )
  ) : (
    <FavoriteIcon href="/login" />
  );

  return user ? (
    <IconButton aria-label="Like Post" onClick={likePost}>
      <Badge
        badgeContent={likeCount}
        color="primary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {likeButton}
      </Badge>
    </IconButton>
  ) : (
    <IconButton aria-label="Like Post" href="/login">
      <Badge
        badgeContent={likeCount}
        color="primary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {likeButton}
      </Badge>
    </IconButton>
  );
}

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export default LikeButton;
