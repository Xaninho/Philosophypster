import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
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

import { AuthContext } from "../../context/auth";
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
        avatar={<Avatar>A</Avatar>}
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
        {/* If the owner of the post, show a delete button */}
        {user && user.username === username && <DeleteButton postId={id} />}
      </CardActions>
    </Card>
  );
}

export default PostCard;
