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
} from "@material-ui/core";

import { Button, Icon, Label } from "semantic-ui-react";
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
        <MyPopup content="Comment on post">
          <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
            <Button color="blue" basic>
              <Icon name="comments" />
            </Button>
            <Label basic color="blue" pointing="left">
              {commentCount}
            </Label>
          </Button>
        </MyPopup>
        {user && user.username === username && <DeleteButton postId={id} />}
      </CardActions>
    </Card>
  );
}

export default PostCard;
