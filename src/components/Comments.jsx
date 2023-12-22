import { useState } from "react";

import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function Comments() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };
  return (
    <>
      <Grid container marginY={2} padding={1} justifyContent="center">
        <Grid item lg={1} sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar>K</Avatar>
        </Grid>
        <Grid item lg={11}>
          <Grid container paddingX={1}>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "0.5rem",
              }}
            >
              <Typography variant="subtitle1" component="h6">
                John Doe
              </Typography>
              <Typography variant="caption" component="caption" display="block">
                2 Days ago
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography paragraph sx={{ whiteSpace: "pre-line" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
                porro. Asperiores ad suscipit, vitae consequatur dolorum
                voluptatem est ea odit cupiditate iste magnam quae quod
                recusandae vero itaque aperiam tenetur.
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Button startIcon={<ThumbUpIcon />} onClick={handleLike}>
                Like ({likes})
              </Button>
              <Button startIcon={<ThumbDownIcon />} onClick={handleDislike}>
                Dislike ({dislikes})
              </Button>
              <Button variant="text" size="small">
                Reply
              </Button>
            </Grid>
            <Grid item lg={12}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Comments;
