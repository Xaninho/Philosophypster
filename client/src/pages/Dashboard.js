import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
//import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/dashboard/PostCard";
import { FETCH_POSTS_QUERY } from "../util/graphql";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
  },
  paper: {
    height: 200,
    width: 300,
  },
  control: {
    padding: theme.spacing(10),
  },
}));

function Dashboard() {
  const { user } = useContext(AuthContext);
  let posts = "";
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  if (data) {
    posts = data.getPosts;
  }

  const [spacing, setSpacing] = React.useState(1);
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <h1 style={{ textAlign: "center", marginBottom: 50 }}>RecentPosts</h1>
      <Grid container justify="center" spacing={spacing}>
        {posts &&
          posts.map((post) => (
            <Grid key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
      </Grid>
    </section>
  );
}

export default Dashboard;
