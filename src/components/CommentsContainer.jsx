import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import AddComment from "./AddComment";
import Comments from "./Comments";

function CommentsContainer() {
  return (
    <>
      <Paper>
        <Grid container lg={12}>
          <Grid item lg={12}>
            <AddComment />
          </Grid>
          <Grid item lg={12}>
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default CommentsContainer;
