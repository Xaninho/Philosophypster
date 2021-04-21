import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { IconButton, Badge } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

import { LIKE_POST_MUTATION } from "../../util/gqlQueries";

function LikeButton({ user, post: { id, likeCount, likes } }) {
  const [liked, setLiked] = useState(false);

  // If the user has any likes, set like
  useEffect(() => {
    if (user && likes.find((like) => like.username === user.username)) {
      setLiked(true);
    } else setLiked(false);
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION, {
    variables: { postId: id },
  });

  // If the user exists and /or has liked, show the respective Icon
  const likeButton = user ? (
    liked ? (
      <FavoriteIcon color="primary" />
    ) : (
      <FavoriteIcon />
    )
  ) : (
    <FavoriteIcon as={Link} to="/login" />
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

export default LikeButton;
