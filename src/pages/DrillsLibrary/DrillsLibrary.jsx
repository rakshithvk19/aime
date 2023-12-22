import Appbar from "../../components/Appbar/Appbar";
import VideoCard from "../../components/VideoCard/VideoCard";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

export default function DrillsLibrary() {
  return (
    <>
      <Appbar />
      <main>
        <CssBaseline />
        <Container>
          <Grid
            container
            spacing={2}
            lg={12}
            sm={6}
            md={12}
            xs={1}
            justifyContent="center"
            margin={1}
          >
            <Grid item fullwidth lg={10}>
              <Typography variant="h4" component="h1">
                Drills
              </Typography>
            </Grid>
            <Grid item>
              <VideoCard />
            </Grid>
            <Grid item>
              <VideoCard />
            </Grid>
            <Grid item>
              <VideoCard />
            </Grid>
            <Grid item>
              <VideoCard />
            </Grid>
            <Grid item>
              <VideoCard />
            </Grid>
            <Grid item>
              <VideoCard />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
