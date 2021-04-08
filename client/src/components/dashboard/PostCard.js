import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../../context/auth";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  Avatar,
  Typography,
  CardHeader,
  CardContent,
  IconButton,
  Badge,
} from "@material-ui/core";

import ForumIcon from "@material-ui/icons/Forum";

import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../../util/MyPopup";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 300,
    height: 200,
    margin: 10,
  },
}));

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  const { user } = useContext(AuthContext);
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        title={username}
        subheader={moment(createdAt).fromNow(true)}
      />
      <CardContent>
        <Typography paragraph>{body}</Typography>
      </CardContent>

      <CardActions>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <IconButton
          aria-label="Comment on Post"
          component={Link}
          to={`/posts/${id}`}
        >
          <Badge
            badgeContent={commentCount}
            color="secondary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ForumIcon />
          </Badge>
        </IconButton>
        {user && user.username === username && <DeleteButton postId={id} />}
      </CardActions>
    </Card>
  );
}

export default PostCard;
